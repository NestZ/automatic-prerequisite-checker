import Expression from "./Expression";
import BinaryExpr from "./BinaryExpr";
import { Student } from "../../student/data.type.decl";

export default class Or extends BinaryExpr {
	constructor(left: Expression, right: Expression) {
		super(left, right);
	}

	public toString(): string {
		return this.getLeftExpr().toString() + ' or ' + this.getRightExpr().toString();
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		const leftValid = this.getLeftExpr().eval(std, passedCourses, cart, course, err);
		const rightValid = this.getRightExpr().eval(std, passedCourses, cart, course, err);
		const res: boolean = leftValid || rightValid;
		if(res) err.splice(0, err.length);
		return res;
	}
}