import Atomic from "./Atomic.js";
import Major from "./Major.js";

export default class Faculty extends Atomic {
	#faculty;
	#dep;
	#isNon;

	constructor(faculty, dep) {
		super();
		this.#faculty = faculty;
		this.#dep = dep;
		this.#isNon = false;
	}

	setIsNon() {
		this.#isNon = true;
	}

	print() {
		if(this.#isNon) process.stdout.write("non ");
		process.stdout.write(this.#faculty + " students");
		if(this.#dep != null) {
			process.stdout.write(" in " + this.#dep.getMajor());
			if(this.#dep instanceof Major) process.stdout.write(" major");
			else process.stdout.write(" sub-major");
		}
	}
}