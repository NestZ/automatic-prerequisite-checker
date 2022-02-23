import { Body, Controller, Get } from '@nestjs/common';
import { Student } from '../student/data.type.decl';
import { StudentController } from '../student/student.controller';
import { RegistCheckBody, RegistrationResult } from './data.type.decl';
import { PreCheckerService } from './pre-checker.service';

@Controller('pre-checker')
export class PreCheckerController {
	constructor(
		private student: StudentController,
		private preChecker: PreCheckerService,
	) {}

	@Get()
	async registCheck(@Body() data: RegistCheckBody): Promise<{ results: RegistrationResult[] }> {
		const stdData: Student = (await this.student.getStudentData(data.stdId)).student;
		const stdCourses: string[] = (await this.student.getStudentCourses(data.stdId)).courses;
		const res: RegistrationResult[] = await this.preChecker.registCheck(stdData, stdCourses, data.cart);
		return { results: res };
	}
}
