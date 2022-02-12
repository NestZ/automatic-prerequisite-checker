import Atomic from './Atomic';
import Major from './Major';

const facultyLst = ['nursing', 'medicine', 'pharmacy', 'veterinary medicine', 'dentistry', 'architecture', 'science', 'associated medical sciences', 'economics', 'agro-industry', 'agriculture', 'humanities', 'engineering', 'arts, media and technology', 'business administration', 'education', 'political science and public administration', 'law', 'mass communication']

export default class Faculty extends Atomic {
	private faculty: string;
	private dep: Major;
	private isNon: boolean;

	constructor(faculty: string, dep: Major) {
		super();
		if(!facultyLst.includes(faculty)) throw "can't find " + faculty + ' faculty';
		this.faculty = faculty;
		this.dep = dep;
		this.isNon = false;
	}

	setIsNon(): void {
		this.isNon = true;
	}

	print(): void {
		if(this.isNon) console.log('not for ');
		else console.log('for ');
		console.log(this.faculty + ' students');
		if(this.dep != null) {
			console.log(' in ' + this.dep.getMajor());
			if(this.dep instanceof Major) console.log(' major');
			else console.log(' sub-major');
		}
	}

	eval(std: any, courses: any): boolean {
		const fac: boolean = std['faculty'] === this.faculty;
		let dep: boolean = false;
		if(this.dep !== null) {
			dep = this.dep.eval(std, courses);
		}
		else dep = true;
		return this.isNon ? !(fac && dep) : (fac && dep);
	}
}