import Atomic from "./Atomic";
import PreChecker from "../ast.builder";
import { Student } from "../data.type.decl";
import { FacultyData } from "../data.type.decl";

export default class FacGroup extends Atomic {
	private facultyGroup: string;

	constructor(facultyGroup: string) {
		super();
		this.facultyGroup = facultyGroup;
	}

	public getFacultyGroup(): string {
		return this.facultyGroup;
	}

	public print(): string {
		let str = '';
		let facGroupName = this.facultyGroup;
		if(this.facultyGroup !== 'science based') {
			facGroupName = PreChecker.facGroupName(this.facultyGroup);
		}
		if(this.getIsNon()) str += 'not for ';
		else str += 'for ';
		str += 'students in ' + facGroupName + ' group';
		return str;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		const faculty: FacultyData[] = PreChecker.getFaculty();
		let res: boolean = false;
		for(const fac of faculty) {
			if(std.facId === fac.facId) {
				if(this.facultyGroup === 'science based') {
					if(fac.isScienceBased === '1') res = true;
				} else {
					if(this.facultyGroup === fac.facGroup) res = true;
				}
			}
		}
		err.push(this.print());
		return this.getIsNon() ? !res : res;
	}
}