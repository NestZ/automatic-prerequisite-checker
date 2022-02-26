import BinaryExpr from './BinaryExpr';
import Expression from './Expression';
import { Student } from  '../../student/data.type.decl';

export default class And extends BinaryExpr {
	constructor(left: Expression, right: Expression) {
		super(left, right);
	}

	public toString(): string {
		return this.getLeftExpr().toString() + ' and ' + this.getRightExpr().toString();
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		const leftValid: boolean = this.getLeftExpr().eval(std, passedCourses, cart, course, err);
		const rightValid: boolean = this.getRightExpr().eval(std, passedCourses, cart, course, err);
		const res: boolean = leftValid && rightValid;
		if(res) err.splice(0, err.length);
		return res;
	}
}