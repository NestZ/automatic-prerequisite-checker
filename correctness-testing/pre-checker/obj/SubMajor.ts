import { Student } from "../../../auto-prerequisite-checker/src/student/data.type.decl";

export default class SubMajor {
	private subMajorId: string;

	constructor(subMajorId: string) {
		this.subMajorId = subMajorId;
	}

	getMajor(): string {
		return this.subMajorId;
	}

	eval(std: Student, passedCourses: string[], cart: string[], course: string): boolean {
		return std['major'] === this.subMajorId;
	}
}