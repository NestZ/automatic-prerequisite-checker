import Atomic from './Atomic';
import Major from './Major';
import SubMajor from './SubMajor';
import { Student } from '../../student/data.type.decl';

export default class Faculty extends Atomic {
	private facultyId: string;
	private dep: Major | SubMajor;
	private isNon: boolean;

	constructor(facultyId: string, dep: Major | SubMajor) {
		super();
		this.facultyId = facultyId
		this.dep = dep;
		this.isNon = false;
	}

	setIsNon(): void {
		this.isNon = true;
	}

	getFacultyId(): string {
		return this.facultyId;
	}

	print(): string {
		let str = '';
		if(this.isNon) str += 'not for ';
		else str += 'for ';
		str += this.facultyId + ' students';
		if(this.dep !== null) {
			str += ' in ' + this.dep.getMajor();
			if(this.dep instanceof Major) str += ' major';
			else str += ' sub-major';
		}
		return str;
	}

	eval(std: Student, passedCourses: string[], cart: string[], course: string): boolean {
		let validFac: boolean = std.facId === this.facultyId;
		let validDep: boolean = this.dep === null;
		if(this.dep !== null) {
			validDep = this.dep.eval(std, passedCourses, cart, course);
		}
		const valid = validFac && validDep;
		return this.isNon ? !valid : valid;
	}
}