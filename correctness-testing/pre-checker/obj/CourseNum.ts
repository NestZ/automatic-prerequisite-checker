import Atomic from "./Atomic";
import { Student } from "../../../auto-prerequisite-checker/src/student/data.type.decl";

export default class CourseNum extends Atomic {
	private courseNum: string;
	private isConcurrent: boolean;

	constructor(courseNum: string, isConcurrent: boolean) {
		super();
		this.courseNum = courseNum;
		this.isConcurrent = isConcurrent;
	}

	print(): string {
		if(this.isConcurrent) return 'concurrent to ' + this.courseNum;
		return this.courseNum;
	}

	eval(std: Student, passedCourses: string[], cart: string[], course: string): boolean {
		return false;
	}
}