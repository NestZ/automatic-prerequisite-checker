import { Student } from "../../student/data.type.decl";

export default class SubMajor {
	private subMajorId: string;

	constructor(subMajorId: string) {
		this.subMajorId = subMajorId;
	}

	public getDepId(): string {
		return this.subMajorId;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		//TODO: check sub-major
		return std.majorId === this.subMajorId;
	}
}