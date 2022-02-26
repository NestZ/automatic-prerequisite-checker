import Expression from "./Expression";
import EqualAst from "../main";
import * as CourseNumObj from '../../../auto-prerequisite-checker/src/pre-checker/obj/CourseNum';

export default class CourseNum extends CourseNumObj.default {
	constructor(courseNum: string, isConcurrent: boolean) {
		super(courseNum, isConcurrent);
	}

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		for(let i = 0;i < lst.length;i++) {
			if(EqualAst.cmpNodes(lst[i], this)) return truth[i];
		}
		throw "can't find matching node";
	}
}