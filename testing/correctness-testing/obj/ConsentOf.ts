import Expression from './Expression';
import EqualAst from '../main';
import * as ConsentOfObj from '../../../auto-prerequisite-checker/src/pre-checker/obj/ConsentOf';

export class ConsentOf extends ConsentOfObj.default {
	constructor(consentOf: string) {
		super(consentOf);
	}

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		for(let i = 0;i < lst.length;i++) {
			if(EqualAst.cmpNodes(lst[i], this)) return truth[i];
		}
		throw "can't find matching node";
	}
}