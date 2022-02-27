import { Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { lastValueFrom, Observable } from 'rxjs';
import { Course, Student, StudentData } from './data.type.decl';
import { StudentService } from './student.service';

export type CourseCount = {
	count: number,
};

@Controller('student')
export class StudentController {
	private block: number = 100000;

	constructor(
		private httpService: HttpService,
		private studentService: StudentService,
		private logger: Logger = new Logger(StudentService.name),
	) {}

	@Post('/')
	async updateStudentsData(): Promise<{ studentCount: number } | { errors: any }> {
		try {
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
			this.logger.log('Saved ' + stdData.length + ' student records.');
			return { studentCount: stdData.length };
		} catch (err) {
			return { errors: err };
		}
	}

	@Post('/courses')
	async updateStudentCourses(): Promise<{ coursesCount: number } | { errors: any }> {
		let res: Observable<AxiosResponse<CourseCount[], any>>;
		let count: number;
		try {
			res = this.httpService.get(
				process.env.REG_API_GET_STUDENT_COURSES_PATH + '/count',
				{
					auth: { username: process.env.REG_API_USERNAME, password: process.env.REG_API_PASSWORD },
				}
			);
			count = ((await lastValueFrom(res)).data as any as CourseCount).count;
		} catch(err) {
			return { errors: err };
		}
		this.logger.log('Saving ' + count + " student's course records.");
		for (let i = 0;i < count;i += this.block) {
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
								limit: this.block,
								skip: i,
							},
						},
					}
				);
				const stdData: Course[] = (await lastValueFrom(res)).data;
				await this.studentService.updateStudentCourses(stdData);
				this.logger.log('Saved ' + (i + stdData.length) + '/' + count + " student's course records.");
			} catch(err) {
				this.logger.log(err);
				this.logger.log('Retrying...');
				i -= this.block;
			}
		}
		return { coursesCount: count };
	}

	@Get('/courses/:id')
	async getStudentCourses(@Param('id') stdId: string): Promise<{ courses: string[] } | { errors: any }> {
		try {
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
				return { courses: (await this.studentService.getStudentCourses(stdId)) || [] };
			}
		} catch(err) {
			return { errors: err };
		}
	}

	@Get('/:id')
	async getStudentData(@Param('id') stdId: string): Promise<{ student: Student } | { errors: any }> {
		try{
			return { student: await this.studentService.getStudentData(stdId) };
		} catch(err) {
			return { errors: err };
		}
	}

	@Post('/clear')
	async clearCache(): Promise<{ message: string } | { errrors: any }> {
		try{
			await this.studentService.clearCache();
			return { message: 'cache cleared' };
		} catch(err) {
			return { errrors: err };
		}
	}
}
