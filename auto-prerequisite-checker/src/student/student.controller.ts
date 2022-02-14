import { Controller, Get, Logger, OnModuleInit, Param, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { lastValueFrom, Observable } from 'rxjs';
import { Course, Student, StudentData } from './data.type.decl';
import { StudentService } from './student.service';

export type CourseCount = {
	count: number,
};

@Controller('student')
export class StudentController implements OnModuleInit {
	private block: number = 100000;

	constructor(
		private httpService: HttpService,
		private studentService: StudentService,
		private logger: Logger = new Logger(StudentService.name),
	) {}

	async onModuleInit(): Promise<void> {
		await this.studentService.clearCache();
		await this.updateStudentsData();
		await this.updateStudentCourses(this.block);
	}

	@Post('/')
	async updateStudentsData(): Promise<{ studentCount: number }> {
		const res: Observable<AxiosResponse<StudentData[], any>> = this.httpService.get(
			process.env.REG_API_GET_STUDENTS_PATH,
			{
				auth: {
					username: process.env.REG_API_USERNAME,
					password: process.env.REG_API_PASSWORD,
				},
				params: {
					filter: {
						fields: {
							student_id: true,
							faculty_id: true,
							major_id: true,
							curriculum_id: true,
							year_admit: true,
						},
					},
				},
			}
		);
		const stdData: StudentData[] = (await lastValueFrom(res)).data;
		await this.studentService.updateStudentsData(stdData);
		this.logger.log('Saved ' + stdData.length + ' student records.')
		return { studentCount: stdData.length };
	}

	@Post('/courses')
	async updateStudentCourses(block: number): Promise<{ coursesCount: number }> {
		const res: Observable<AxiosResponse<CourseCount[], any>> = this.httpService.get(
			process.env.REG_API_GET_STUDENT_COURSES_PATH + '/count',
			{
				auth: { username: process.env.REG_API_USERNAME, password: process.env.REG_API_PASSWORD },
			}
		);
		let count: number = ((await lastValueFrom(res)).data as any as CourseCount).count;
		this.logger.log('Saving ' + count + " student's course records.");
		for (let i = 0;i < count;i += block) {
			try{
				const res: Observable<AxiosResponse<Course[], any>> = this.httpService.get(
					process.env.REG_API_GET_STUDENT_COURSES_PATH,
					{
						auth: {
							username: process.env.REG_API_USERNAME,
							password: process.env.REG_API_PASSWORD,
						},
						params: {
							filter: {
								fields: {
									STUDENT_ID: true,
									GRADE: true,
									COURSENO: true,
								},
								limit: block,
								skip: i,
							},
						},
					}
				);
				const stdData: Course[] = (await lastValueFrom(res)).data;
				await this.studentService.updateStudentCourses(stdData);
				this.logger.log('Saved ' + (i + stdData.length) + '/' + count + " student's course records.");
			} catch(err) {
				this.logger.log(err.message);
				this.logger.log('Retrying...');
				i -= block;
			}
		}
		return { coursesCount: count };
	}

	@Get('/courses/:id')
	async getStudentCourses(@Param('id') stdId: string): Promise<{ courses: string[] }> {
		const courses: string[] = await this.studentService.getStudentCourses(stdId);
		if (courses) {
			return { courses };
		} else {
			const res: Observable<AxiosResponse<Course[], any>> = this.httpService.get(
				process.env.REG_API_GET_STUDENT_COURSES_PATH,
				{
					auth: {
						username: process.env.REG_API_USERNAME,
						password: process.env.REG_API_PASSWORD,
					},
					params: {
						filter: {
							fields: {
								STUDENT_ID: true,
								GRADE: true,
								COURSENO: true,
							},
							where: {
								STUDENT_ID: stdId,
							},
						},
					},
				}
			);
			const courses: Course[] = (await lastValueFrom(res)).data;
			await this.studentService.updateStudentCourses(courses);
			return { courses: await this.studentService.getStudentCourses(stdId) };
		}
	}

	@Get('/:id')
	async getStudentData(@Param('id') stdId: string): Promise<{ student: Student }> {
		return { student: await this.studentService.getStudentData(stdId) };
	}
}
