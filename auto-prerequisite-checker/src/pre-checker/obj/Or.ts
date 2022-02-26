import Expression from "./Expression";
import BinaryExpr from "./BinaryExpr";
import { Student } from "../../student/data.type.decl";
import { EvalReturn } from "../data.type.decl";

export default class Or extends BinaryExpr {
	constructor(left: Expression, right: Expression) {
		super(left, right);
	}

	public toString(): string {
		return this.getLeftExpr().toString() + ' or ' + this.getRightExpr().toString();
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string): EvalReturn {
		const left = this.getLeftExpr().eval(std, passedCourses, cart, course);
		const right = this.getRightExpr().eval(std, passedCourses, cart, course);
		const valid: boolean = left.valid || right.valid;
		let notSatisfiedCondition: Expression = null;
		if(!(left.valid) && !(right.valid)) {
			notSatisfiedCondition = this;
		}
		return { valid, notSatisfiedCondition };
	}
}