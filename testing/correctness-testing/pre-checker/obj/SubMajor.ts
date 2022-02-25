import Atomic from "./Atomic";
import { Student } from "../data.type.decl";

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
}