import Expression from "./Expression";
import EqualAst from "../main";
import * as SubMajorObj from '../../../auto-prerequisite-checker/src/pre-checker/obj/SubMajor';

export default class SubMajor extends SubMajorObj.default {
	constructor(facId: string, majorId: string, subMajorId: string, subMajorName: string) {
		super(facId, majorId, subMajorId, subMajorName);
	}

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		for(let i = 0;i < lst.length;i++) {
			if(EqualAst.cmpNodes(lst[i], this)) return truth[i];
		}
		throw "can't find matching node";
	}
}