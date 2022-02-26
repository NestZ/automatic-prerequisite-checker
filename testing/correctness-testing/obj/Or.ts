import Expression from "./Expression";
import * as OrObj from '../../../auto-prerequisite-checker/src/pre-checker/obj/Or';

export default class Or extends OrObj.default {
	private isNon: boolean;

	constructor(left: Expression, right: Expression) {
		super(left, right);
		this.isNon = false;
	}

	public setIsNon(): void {
		this.isNon = true;
	}

	public getIsNon(): boolean {
		return this.isNon;
	}

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		const leftValid: boolean = (this.getLeftExpr() as Expression).evalTest(lst, truth);
		const rightValid: boolean = (this.getRightExpr() as Expression).evalTest(lst, truth);
		let res: boolean = leftValid || rightValid;
		res = this.getIsNon() ? !res : res;
		return res;
	}
}