import { Body, Controller, Get } from '@nestjs/common';
import { Student } from 'src/student/data.type.decl';
import { StudentService } from 'src/student/student.service';
import { RegistCheckBody } from './data.type.decl';
import { PreCheckerService } from './pre-checker.service';

@Controller('pre-checker')
export class PreCheckerController {
	constructor(
		private student: StudentService,
		private preChecker: PreCheckerService,
	) {}

	@Get()
	async registCheck(@Body() data: RegistCheckBody): Promise<any> {
		console.log(data);
		const stdData: Student = await this.student.getStudentData(data.stdId);
		const stdCourses: string[] = await this.student.getStudentCourses(data.stdId);
		const res = await this.preChecker.registCheck(stdData, stdCourses, data.cart, data.courseId);
		return { result: res ? "Valid" : "Invalid" };
	}
}
