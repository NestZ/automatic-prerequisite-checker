import Expression from "./Expression";
import EqualAst from "../main";
import * as MajorObj from '../../../auto-prerequisite-checker/src/pre-checker/obj/Major';

export default class Major extends MajorObj.default {
	constructor(majorId: string) {
		super(majorId);
	}

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		for(let i = 0;i < lst.length;i++) {
			if(EqualAst.cmpNodes(lst[i], this)) return truth[i];
		}
		throw "can't find matching node";
	}
}