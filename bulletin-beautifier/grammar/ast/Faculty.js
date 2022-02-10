import Atomic from "./Atomic.js";
import Major from "./Major.js";

const facultyLst = ['medicine', 'pharmacy', 'veterinary medicine', 'dentistry', 'architecture', 'science', 'associated medical sciences', 'economics', 'agro-industry', 'agriculture', 'humanities', 'engineering', 'arts, media and technology', 'business administration', 'education']

export default class Faculty extends Atomic {
	#faculty;
	#dep;
	#isNon;

	constructor(faculty, dep) {
		if(!facultyLst.includes(faculty)) throw "can't find " + faculty + ' faculty';
		super();
		this.#faculty = faculty;
		this.#dep = dep;
		this.#isNon = false;
	}

	setIsNon() {
		this.#isNon = true;
	}

	print() {
		if(this.#isNon) process.stdout.write("not for ");
		process.stdout.write("for " + this.#faculty + " students");
		if(this.#dep != null) {
			process.stdout.write(" in " + this.#dep.getMajor());
			if(this.#dep instanceof Major) process.stdout.write(" major");
			else process.stdout.write(" sub-major");
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