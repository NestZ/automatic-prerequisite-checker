import Atomic from "./Atomic";
import { Student } from "../data.type.decl";
import Expression from "./Expression";
import EqualAst from "../../main";

export default class CourseNum extends Atomic {
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

	public print(): string {
		if(this.isConcurrent) return 'concurrent to ' + this.courseNum;
		return this.courseNum;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		for(const passed of passedCourses) {
			if(passed === this.courseNum) return true;
		}
		if(this.isConcurrent) {
			for(const cur of cart) {
				if(cur === this.courseNum) return true;
			}
		}
		let errStr: string = 'requires ' + this.print();
		err.push(errStr);
		return false;
	}

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		for(let i = 0;i < lst.length;i++) {
			if(EqualAst.cmpNodes(lst[i], this)) return truth[i];
		}
		throw "can't find matching node";
	}
}