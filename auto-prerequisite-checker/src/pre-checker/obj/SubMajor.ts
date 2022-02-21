import { Student } from "../../student/data.type.decl";

export default class SubMajor {
	private subMajorId: string;

	constructor(subMajorId: string) {
		this.subMajorId = subMajorId;
	}

	getMajor(): string {
		return this.subMajorId;
	}

	eval(std: Student, passedCourses: string[], cart: string[], course: string): boolean {
		//TODO: check sub-major
		return std.majorId === this.subMajorId;
	}
}