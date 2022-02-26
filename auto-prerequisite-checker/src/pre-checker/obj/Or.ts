import Expression from "./Expression";
import { Student } from "../../student/data.type.decl";

export default class Or extends Expression {
	private left: Expression;
	private right: Expression;

	constructor(left: Expression, right: Expression) {
		super();
		this.left = left;
		this.right = right;
	}

	public toString(): string {
		return this.left.toString() + ' or ' + this.right.toString();
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		const leftValid = this.left.eval(std, passedCourses, cart, course, err);
		const rightValid = this.right.eval(std, passedCourses, cart, course, err);
		const res: boolean = leftValid || rightValid;
		if(res) err.splice(0, err.length);
		return res;
	}
}