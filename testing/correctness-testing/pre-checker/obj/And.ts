import Expression from './Expression';
import { Student } from  '../data.type.decl';

export default class And extends Expression {
	private left: Expression;
	private right: Expression;

	constructor(left: Expression, right: Expression) {
		super();
		this.left = left;
		this.right = right;
	}

	public getLeftExpr(): Expression {
		return this.left;
	}

	public getRightExpr(): Expression {
		return this.right;
	}

	public print(): string {
		return this.left.print() + ' and ' + this.right.print();
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		const leftValid: boolean = this.left.eval(std, passedCourses, cart, course, err);
		const rightValid: boolean = this.right.eval(std, passedCourses, cart, course, err);
		let res: boolean = leftValid && rightValid;
		res = this.getIsNon() ? !res : res;
		if(res) err.splice(0, err.length);
		return res;
	}
}