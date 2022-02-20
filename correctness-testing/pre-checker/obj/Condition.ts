import Expression from "./Expression";

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

	eval(std: any, courses: any): boolean {
		return this.expr.eval(std, courses);
	}
}