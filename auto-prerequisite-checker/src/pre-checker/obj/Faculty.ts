import Major from './Major';
import SubMajor from './SubMajor';
import NegatableExpr from './NegatableExpr';
import { Student } from '../../student/data.type.decl';
import { EvalReturn } from '../data.type.decl';

export default class Faculty extends NegatableExpr {
	private facultyId: string;
	private facultyName: string;
	private dep: Major | SubMajor;

	constructor(facultyId: string, facultyName: string, dep: Major | SubMajor) {
		super();
		this.facultyId = facultyId;
		this.facultyName = facultyName;
		this.dep = dep;
	}

	public getFacultyName(): string {
		return this.facultyName;
	}

	public getFacultyId(): string {
		return this.facultyId;
	}

	public getDep(): Major | SubMajor {
		return this.dep;
	}

	public toString(): string {
		let str: string = '';
		if(this.getIsNon()) str += 'not for ';
		else str += 'for ';
		str += this.facultyName + ' students';
		if(this.dep !== null) {
			if(this.dep instanceof Major) str += ' in ' + this.dep.toString();
			else str += ' in ' + this.dep.toString();
		}
		return str;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string): EvalReturn {
		let validFac: boolean = std.facId === this.facultyId;
		let validDep: boolean = this.dep === null;
		if(this.dep !== null) {
			validDep = this.dep.eval(std, passedCourses, cart, course).valid;
		}
		const valid: boolean = validFac && validDep;
		const res: boolean = this.getIsNon() ? !valid : valid;
		if(res) return { valid: true, notSatisfiedCondition: null };
		return { valid: false, notSatisfiedCondition: this };
	}
}