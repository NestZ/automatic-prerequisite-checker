import Expression from './Expression';
import EqualAst from '../main';
import * as YearObj from '../../../auto-prerequisite-checker/src/pre-checker/obj/Year';

export class Year extends YearObj.default {
	constructor(year: number, isAtLeast: boolean) {
		super(year, isAtLeast);
	}

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		for(let i = 0;i < lst.length;i++) {
			if(EqualAst.cmpNodes(lst[i], this)) return truth[i];
		}
		throw "can't find matching node";
	}
}