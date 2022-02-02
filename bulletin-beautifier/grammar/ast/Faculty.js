import Atomic from "./Atomic";

export class Faculty extends Atomic {
	#faculty;
	
	constructor(faculty) {
		super();
		this.#faculty = faculty;
	}
}