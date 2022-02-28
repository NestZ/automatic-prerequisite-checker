import Major from './Major';
import SubMajor from './SubMajor';
import Expression from './Expression';
import EqualAst from '../main';
import * as FacultyObj from '../../../auto-prerequisite-checker/src/pre-checker/obj/Faculty';

export default class Faculty extends FacultyObj.default {
	constructor(facultyId: string, facultyName: string, dep: Major | SubMajor) {
		super(facultyId, facultyName, dep);
	}

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		for(let i = 0;i < lst.length;i++) {
			if(EqualAst.cmpNodes(lst[i], this)) return truth[i];
		}
		throw "can't find matching node";
	}
}