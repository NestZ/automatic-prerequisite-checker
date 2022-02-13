import { Controller, Get, OnModuleInit, Param, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { lastValueFrom, Observable } from 'rxjs';
import { Course, Student, StudentData } from './data.type.decl';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController implements OnModuleInit {
	constructor(
		private httpService: HttpService,
		private studentService: StudentService,
	) {}

	async onModuleInit(): Promise<void> {
		await this.updateStudentsData();
	}

	@Post('/')
	async updateStudentsData(): Promise<{ studentCount: number }> {
		const res: Observable<AxiosResponse<StudentData[], any>> = this.httpService.get(
			process.env.REG_API_GET_STUDENTS_PATH,
			{ auth: { username: process.env.REG_API_USERNAME, password: process.env.REG_API_PASSWORD }}
		);
		const stdData: StudentData[] = (await lastValueFrom(res)).data;
		await this.studentService.updateStudentsData(stdData);
		return { studentCount: stdData.length };
	}

	@Get('/:id')
	async getStudentCourses(@Param('id') stdId: string): Promise<{ courses: string[] }> {
		const courses: string[] = (await this.studentService.getCache('courses:' + stdId)) as string[];
		if (courses) {
			return { courses };
		} else {
			const res: Observable<AxiosResponse<Course[], any>> = this.httpService.get(
				process.env.REG_API_GET_STUDENT_COURSES_PATH + '?filter={"where":{"student_id":' + stdId + '}}',
				{ auth: { username: process.env.REG_API_USERNAME, password: process.env.REG_API_PASSWORD }}
			);
			const courses: Course[] = (await lastValueFrom(res)).data;
			const passedCourses: Course[] = courses.filter((course) => {
				return course.grade !== 'F' && course.grade !== 'W';
			});
			const courseIds: string[] = passedCourses.map((course: Course) => {
				return course.courseno;
			});
			await this.studentService.setCache('courses:' + stdId, courseIds);
			return { courses: courseIds };
		}
	}

	@Get('/data/:id')
	async getStudentData(@Param('id') stdId: string): Promise<{ student: Student }> {
		return { student: await this.studentService.getStudentData(stdId) };
	}
}
