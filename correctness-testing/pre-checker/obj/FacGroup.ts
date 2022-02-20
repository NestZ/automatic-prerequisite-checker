import Atomic from "./Atomic";
import { Student } from "../../../auto-prerequisite-checker/src/student/data.type.decl";

export default class FacGroup extends Atomic {
	private facultyGroup: string;
	private isNon: boolean;

	constructor(facultyGroup: string) {
		super();
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

	eval(std: Student, passedCourses: string[], cart: string[], course: string): boolean {
		return true;
	}
}