import Expression from "./Expression";
import EqualAst from "../main";
import * as FacGroupObj from '../../../auto-prerequisite-checker/src/pre-checker/obj/FacGroup';

export default class FacGroup extends FacGroupObj.default {
	constructor(facultyGroup: string) {
		super(facultyGroup);
	}

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		for(let i = 0;i < lst.length;i++) {
			if(EqualAst.cmpNodes(lst[i], this)) return truth[i];
		}
		throw "can't find matching node";
	}
}