import PreChecker from "../ast.builder";
import NegatableExpr from "./NegatableExpr";
import { Student } from "../../student/data.type.decl";
import { EvalReturn, FacultyData } from "../data.type.decl";

export default class FacGroup extends NegatableExpr {
	private facultyGroup: string;

	constructor(facultyGroup: string) {
		super();
		this.facultyGroup = facultyGroup;
	}

	public getFacGroup(): string {
		return this.facultyGroup;
	}

	public toString(): string {
		let str: string = '';
		let facGroupName: string = PreChecker.facGroupName(this.facultyGroup);
		if(this.getIsNon()) str += 'not for ';
		else str += 'for ';
		str += 'students in ' + facGroupName + ' group';
		return str;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string): EvalReturn {
		const faculty: FacultyData[] = PreChecker.getFaculty();
		for(const fac of faculty) {
			if(std.facId === fac.facId) {
				if(this.facultyGroup === fac.facGroup) return { valid: true, notSatisfiedCondition: null };
			}
		}
		return { valid: false, notSatisfiedCondition: this };
	}
}