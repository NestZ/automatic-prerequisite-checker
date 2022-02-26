import BinaryExpr from './BinaryExpr';
import Expression from './Expression';
import { Student } from  '../../student/data.type.decl';
import { EvalReturn } from '../data.type.decl';

export default class And extends BinaryExpr {
	constructor(left: Expression, right: Expression) {
		super(left, right);
	}

	public toString(): string {
		return '(' + this.getLeftExpr().toString() + ' and ' + this.getRightExpr().toString() + ')';
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string): EvalReturn {
		const left: EvalReturn = this.getLeftExpr().eval(std, passedCourses, cart, course);
		const right: EvalReturn = this.getRightExpr().eval(std, passedCourses, cart, course);
		const valid = left.valid && right.valid;
		let notSatisfiedCondition: Expression = null;
		if(!(left.valid) && !(right.valid)) {
			notSatisfiedCondition = this;
		} else if(left.valid && !(right.valid)) {
			notSatisfiedCondition = right.notSatisfiedCondition;
		} else if(!(left.valid) && right.valid) {
			notSatisfiedCondition = left.notSatisfiedCondition;
		}
		return { valid, notSatisfiedCondition };
	}
}