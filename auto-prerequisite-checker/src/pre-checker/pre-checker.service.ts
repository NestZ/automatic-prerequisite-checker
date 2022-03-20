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
			if(!condition) {
				results.push({ courseId: course, result: 'valid', requiredConditions: "Can't find course condition" });
			} else {
				const res: EvalReturn = condition.eval(std, passedCourses, cart, course);
				let result: RegistrationResult;
				if(res.valid) {
					result = {
						courseId: course,
						result: 'valid',
					}
				} else {
					result = {
						courseId: course,
						result: 'invalid',
						requiredConditions: res.notSatisfiedCondition.toString(),
					}
				}
				results.push(result);
			}
		}
		return results;
	}
}
