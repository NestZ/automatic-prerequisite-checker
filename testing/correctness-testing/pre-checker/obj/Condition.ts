import Expression from "./Expression";
import { Student } from "../../../auto-prerequisite-checker/src/student/data.type.decl";

export default class Condition {
	private expr: Expression;

	constructor(expr: Expression) {
		this.expr = expr;
	}

	getExpression(): Expression {
		return this.expr;
	}

	print(): string {
		return this.expr.print();
	}

	eval(std: Student, passedCourses: string[], cart: string[], course: string): boolean {
		return this.expr.eval(std, passedCourses, cart, course);
	}
}