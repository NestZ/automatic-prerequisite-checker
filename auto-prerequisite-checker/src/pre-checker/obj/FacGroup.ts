import Atomic from "./Atomic";

const facGroupLst: string[] = ['science based', 'humanities and social sciences', 'sciences and technology', 'health sciences'];

export default class FacGroup extends Atomic {
	private facultyGroup: string;
	private isNon: boolean;

	constructor(facultyGroup: string) {
		super();
		if(!facGroupLst.includes(facultyGroup)) throw "can't find " + facultyGroup + ' group';
		this.facultyGroup = facultyGroup;
		this.isNon = false;
	}

	setIsNon(): void {
		this.isNon = true;
	}

	print(): void {
		if(this.isNon) console.log('not for ');
		else console.log('for ');
		console.log('students in ' + this.facultyGroup + ' group');
	}

	eval(): boolean {
		return true;
	}
}