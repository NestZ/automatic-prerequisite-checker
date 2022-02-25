import Atomic from "./Atomic";
import { Student } from "../data.type.decl";
import Expression from "./Expression";
import EqualAst from "../../main";

export default class Major extends Atomic {
	private majorId: string;

	constructor(majorId: string) {
		super();
		this.majorId = majorId;
	}

	public getDepId(): string {
		return this.majorId;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		return std.majorId === this.majorId;
	}

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		for(let i = 0;i < lst.length;i++) {
			if(EqualAst.cmpNodes(lst[i], this)) return truth[i];
		}
		throw "can't find matching node";
	}
}