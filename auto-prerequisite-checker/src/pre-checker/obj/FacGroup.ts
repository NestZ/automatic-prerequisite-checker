import Atomic from "./Atomic";

const facGroupLst = ['science based', 'humanities and social sciences', 'sciences and technology', 'health sciences'];

export default class FacGroup extends Atomic {
	#facultyGroup
	#isNon

	constructor(facultyGroup) {
		super();
		if(!facGroupLst.includes(facultyGroup)) throw "can't find " + facultyGroup + ' group';
		this.#facultyGroup = facultyGroup;
		this.#isNon = false;
	}

	setIsNon() {
		this.#isNon = true;
	}

	print() {
		if(this.#isNon) console.log('not for ');
		else console.log('for ');
		console.log('students in ' + this.#facultyGroup + ' group');
	}

	eval() {
		return true;
	}
}