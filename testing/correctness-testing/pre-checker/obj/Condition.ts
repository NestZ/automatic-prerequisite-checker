import Expression from "./Expression";
import { Student } from "../data.type.decl";

export default class Condition {
	private expr: Expression;

	constructor(expr: Expression) {
		this.expr = expr;
	}

	public getExpression(): Expression {
		return this.expr;
	}

	public print(): string {
		return this.expr.print();
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		return this.expr.eval(std, passedCourses, cart, course, err);
	}
}