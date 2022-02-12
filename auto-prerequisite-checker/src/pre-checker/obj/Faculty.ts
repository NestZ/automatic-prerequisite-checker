import Atomic from './Atomic';
import Major from './Major';

const facultyLst = ['nursing', 'medicine', 'pharmacy', 'veterinary medicine', 'dentistry', 'architecture', 'science', 'associated medical sciences', 'economics', 'agro-industry', 'agriculture', 'humanities', 'engineering', 'arts, media and technology', 'business administration', 'education', 'political science and public administration', 'law', 'mass communication']

export default class Faculty extends Atomic {
	#faculty;
	#dep;
	#isNon;

	constructor(faculty, dep) {
		super();
		if(!facultyLst.includes(faculty)) throw "can't find " + faculty + ' faculty';
		this.#faculty = faculty;
		this.#dep = dep;
		this.#isNon = false;
	}

	setIsNon() {
		this.#isNon = true;
	}

	print() {
		if(this.#isNon) console.log('not for ');
		else console.log('for ');
		console.log(this.#faculty + ' students');
		if(this.#dep != null) {
			console.log(' in ' + this.#dep.getMajor());
			if(this.#dep instanceof Major) console.log(' major');
			else console.log(' sub-major');
		}
	}

	eval(std, courses) {
		const fac = std['faculty'] === this.#faculty;
		let dep = false;
		if(this.#dep !== null) {
			dep = this.#dep.eval(std, courses);
		}
		else dep = true;
		return this.#isNon ? !(fac && dep) : (fac && dep);
	}
}