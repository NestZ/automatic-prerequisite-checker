import Atomic from "./Atomic";
import PreChecker from "../ast.builder";
import { Student } from "../../student/data.type.decl";
import { FacultyData } from "../data.type.decl";

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
		let facGroupName = this.facultyGroup;
		if(this.facultyGroup !== 'science based') {
			facGroupName = PreChecker.facGroupName(this.facultyGroup);
		}
		if(this.isNon) str += 'not for ';
		else str += 'for ';
		str += 'students in ' + facGroupName + ' group';
		return str;
	}

	eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		const faculty: FacultyData[] = PreChecker.getFaculty();
		for(const fac of faculty) {
			if(std.facId === fac.facId) {
				if(this.facultyGroup === 'science based') {
					if(fac.isScienceBased === '1') return true;
				} else {
					if(this.facultyGroup === fac.facGroup) return true;
				}
			}
		}
		err.push(this.print());
		return false;
	}
}