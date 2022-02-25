import Atomic from "./Atomic";
import { Student } from "../data.type.decl";

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
}