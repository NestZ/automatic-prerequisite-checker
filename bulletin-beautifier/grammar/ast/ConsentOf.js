import Atomic from "./Atomic";

export class ConsentOfEnum {
	static DEPARTMENT = new Season("department")
	static INSTRUCTOR = new Season("instructor")
	static FACULTY = new Season("faculty")
	static ADVISOR = new Season("advisor")
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
}