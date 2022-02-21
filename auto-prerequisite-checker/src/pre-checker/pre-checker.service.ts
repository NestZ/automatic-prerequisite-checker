import PreChecker from './ast.builder';
import Condition from './obj/Condition';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Student } from '../student/data.type.decl';

@Injectable()
export class PreCheckerService implements OnModuleInit {
	private ast;

	constructor(@Inject('PRE_CHECKER') private preChecker: PreChecker) {}

	onModuleInit() {
		this.ast = PreChecker.getAST();
		PreChecker.setYear(parseInt(process.env.ACADEMIC_YEAR));
	}

	async registCheck(std: Student, passedCourses: string[], cart: string[], course: string): Promise<boolean> {
		const condition: Condition = this.ast[course];
		console.log(this.ast[course].print());
		const res: boolean = condition.eval(std, passedCourses, cart, course);
		return res;
	}
}
