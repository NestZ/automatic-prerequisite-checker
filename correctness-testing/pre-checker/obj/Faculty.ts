import Atomic from './Atomic';
import Major from './Major';
import SubMajor from './SubMajor';

export default class Faculty extends Atomic {
	private facultyId: string;
	private dep: Major | SubMajor; // sub major ?
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

	eval(std: any, courses: any): boolean {
		const fac: boolean = std['faculty'] === this.facultyId;
		let dep: boolean = false;
		if(this.dep !== null) {
			dep = this.dep.eval(std, courses);
		}
		else dep = true;
		return this.isNon ? !(fac && dep) : (fac && dep);
	}
}