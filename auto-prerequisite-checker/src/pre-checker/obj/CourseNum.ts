import Expression from "./Expression";
import { Student } from "../../student/data.type.decl";
import { EvalReturn } from "../data.type.decl";

export default class CourseNum extends Expression {
	private courseNum: string;
	private isConcurrent: boolean;

	constructor(courseNum: string, isConcurrent: boolean) {
		super();
		this.courseNum = courseNum;
		this.isConcurrent = isConcurrent;
	}

	public getIsConcurrent(): boolean {
		return this.isConcurrent;
	}

	public getCourseNum(): string {
		return this.courseNum;
	}

	public toString(): string {
		if(this.isConcurrent) return 'concurrent to ' + this.courseNum;
		return this.courseNum;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string): EvalReturn {
		for(const passed of passedCourses) {
			if(passed === this.courseNum) return { valid: true, notSatisfiedCondition: null };
		}
		if(this.isConcurrent) {
			for(const cur of cart) {
				if(cur === this.courseNum) return { valid: true, notSatisfiedCondition: null };
			}
		}
		return { valid: false, notSatisfiedCondition: this };
	}
}