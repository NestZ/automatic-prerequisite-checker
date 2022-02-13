import { Controller, OnModuleInit, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { lastValueFrom, Observable } from 'rxjs';
import { StudentData } from './data.type.decl';
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

	@Post()
	async updateStudentsData(): Promise<any> {
		const res: Observable<AxiosResponse<StudentData[], any>> = this.httpService.get(
			process.env.REG_API_GET_STUDENT_PATH,
			{ auth: { username: process.env.REG_API_USERNAME, password: process.env.REG_API_PASSWORD }}
		);
		const data: StudentData[] = (await lastValueFrom(res)).data;
		await this.studentService.updateStudentsData(data);
		return { student_count: data.length };
	}
}
