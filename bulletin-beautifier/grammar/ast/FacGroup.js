import Atomic from "./Atomic.js";

const facGroupLst = ['science based', 'humanities and social sciences', 'sciences and technology', 'health sciences'];

export default class FacGroup extends Atomic {
	#facultyGroup
	#isNon

	constructor(facultyGroup) {
		if(!facGroupLst.includes(facultyGroup)) throw "can't find " + facultyGroup + ' group';
		super();
		this.#facultyGroup = facultyGroup;
		this.#isNon = false;
	}

	setIsNon() {
		this.#isNon = true;
	}

	print() {
		if(this.#isNon) process.stdout.write('not for ');
		else process.stdout.write('for ');
		process.stdout.write('students in ' + this.#facultyGroup + ' group');
	}

	eval() {
		return true;
	}
}