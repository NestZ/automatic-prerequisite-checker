import PreChecker from './ast.builder';
import Expression from './obj/Expression';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Student } from '../student/data.type.decl';
import { CourseCondition, RegistrationResult } from './data.type.decl';

@Injectable()
export class PreCheckerService implements OnModuleInit {
	private ast: CourseCondition;

	constructor(@Inject('PRE_CHECKER') private preChecker: PreChecker) {}

	onModuleInit() {
		this.ast = PreChecker.getAST();
		PreChecker.setYear(parseInt(process.env.ACADEMIC_YEAR));
	}

	async registCheck(std: Student, passedCourses: string[], cart: string[]): Promise<RegistrationResult[]> {
		const results: RegistrationResult[] = [];
		for(let course of cart) {
			const condition: Expression = this.ast[course];
			if(condition === null) console.log(course + 'is null');
			let err = [];
			const valid: boolean = condition.eval(std, passedCourses, cart, course, err);
			const result: RegistrationResult = {
				courseId: course,
				result: valid ? 'valid' : 'invalid',
				errors: err.filter(function(elem, i, self) {
					return i === self.indexOf(elem);
				}),
			}
			results.push(result);
		}
		return results;
	}
}
