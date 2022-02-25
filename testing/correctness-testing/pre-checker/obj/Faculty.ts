import Atomic from './Atomic';
import Major from './Major';
import SubMajor from './SubMajor';
import PreChecker from '../ast.builder';
import { Student } from '../data.type.decl';
import Expression from './Expression';
import EqualAst from '../../main';

export default class Faculty extends Atomic {
	private facultyId: string;
	private dep: Major | SubMajor;

	constructor(facultyId: string, dep: Major | SubMajor) {
		super();
		this.facultyId = facultyId
		this.dep = dep;
	}

	public getDep(): Major | SubMajor {
		return this.dep;
	}

	public getFacultyId(): string {
		return this.facultyId;
	}

	public print(): string {
		let str: string = '';
		const facName = PreChecker.facultyName(this.facultyId);
		if(this.getIsNon()) str += 'not for ';
		else str += 'for ';
		str += facName + ' students';
		if(this.dep !== null) {
			let depName: string;
			if(this.dep instanceof Major) depName = PreChecker.majorName(this.facultyId, this.dep.getDepId());
			else depName = PreChecker.subMajorName(this.facultyId, this.dep.getDepId());
			str += ' in ' + depName;
			if(this.dep instanceof Major) str += ' major';
			else str += ' sub-major';
		}
		return str;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		let validFac: boolean = std.facId === this.facultyId;
		let validDep: boolean = this.dep === null;
		if(this.dep !== null) {
			validDep = this.dep.eval(std, passedCourses, cart, course, err);
		}
		const valid: boolean = validFac && validDep;
		const res: boolean = this.getIsNon() ? !valid : valid;
		if(!res) err.push(this.print());
		return res;
	}

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		for(let i = 0;i < lst.length;i++) {
			if(EqualAst.cmpNodes(lst[i], this)) return truth[i];
		}
		throw "can't find matching node";
	}
}