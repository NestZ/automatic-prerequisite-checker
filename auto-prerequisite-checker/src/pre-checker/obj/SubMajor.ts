import Expression from "./Expression";
import { Student } from "../../student/data.type.decl";

export default class SubMajor extends Expression {
	private subMajorId: string;

	constructor(subMajorId: string) {
		super();
		this.subMajorId = subMajorId;
	}

	public getDepId(): string {
		return this.subMajorId;
	}

	public toString(): string {
		return '';
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		//TODO: check sub-major
		return std.majorId === this.subMajorId;
	}
}