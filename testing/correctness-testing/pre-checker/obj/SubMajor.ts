import Atomic from "./Atomic";
import { Student } from "../data.type.decl";
import Expression from "./Expression";
import EqualAst from "../../main";

export default class SubMajor extends Atomic {
	private subMajorId: string;

	constructor(subMajorId: string) {
		super();
		this.subMajorId = subMajorId;
	}

	public getDepId(): string {
		return this.subMajorId;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		//TODO: check sub-major
		return true;
		// return std.majorId === this.subMajorId;
	}

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		for(let i = 0;i < lst.length;i++) {
			if(EqualAst.cmpNodes(lst[i], this)) return truth[i];
		}
		throw "can't find matching node";
	}
}