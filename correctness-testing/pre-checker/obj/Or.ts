import Expression from "./Expression";
import { Student } from "../../../auto-prerequisite-checker/src/student/data.type.decl";

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

	eval(std: Student, passedCourses: string[], cart: string[], course: string): boolean {
		return this.left.eval(std, passedCourses, cart, course) || this.right.eval(std, passedCourses, cart, course);
	}
}