import Atomic from "./Atomic.js";

export class ConsentOfEnum {
	static DEPARTMENT = new ConsentOfEnum("department")
	static INSTRUCTOR = new ConsentOfEnum("instructor")
	static FACULTY = new ConsentOfEnum("faculty")
	static ADVISOR = new ConsentOfEnum("advisor")
	name;
  
	constructor(name) {
	  this.name = name
	}
}

export class ConsentOf extends Atomic {
	#consentOf;

	constructor(consentOf) {
		super();
		this.#consentOf = consentOf;
	}

	print() {
		process.stdout.write("consent of the " + this.#consentOf);
	}

	eval(std, courses) {
		return true;
	}
}