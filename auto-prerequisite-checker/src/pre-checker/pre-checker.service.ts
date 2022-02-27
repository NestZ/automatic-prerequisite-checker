import PreChecker from './ast.builder';
import Expression from './obj/Expression';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Student } from '../student/data.type.decl';
import { CourseCondition, EvalReturn, RegistrationResult } from './data.type.decl';

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
			const res: EvalReturn = condition.eval(std, passedCourses, cart, course);
			const errStr: string = res.notSatisfiedCondition === null ? 'none' : res.notSatisfiedCondition.toString();
			const result: RegistrationResult = {
				courseId: course,
				result: res.valid ? 'valid' : 'invalid',
				requiredConditions: errStr,
			}
			results.push(result);
		}
		return results;
	}
}
