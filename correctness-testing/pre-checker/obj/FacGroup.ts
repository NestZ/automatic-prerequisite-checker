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

	print(): string {
		let str = '';
		if(this.isNon) str += 'not for ';
		else str += 'for ';
		str += 'students in ' + this.facultyGroup + ' group';
		return str;
	}

	eval(): boolean {
		return true;
	}
}