import Expression from "./Expression";

export default class Or extends Expression {
	private left: Expression;
	private right: Expression;

	constructor(left: Expression, right: Expression) {
		super();
		this.left = left;
		this.right = right;
	}

	print(): string {
		return this.left.print() + ' or ' + this.right.print();
	}

	eval(std: any, courses: any): boolean {
		return this.left.eval(std, courses) || this.right.eval(std, courses);
	}
}