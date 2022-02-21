import { Student } from "../../student/data.type.decl";

export default class Major {
	private majorId: string;

	constructor(majorId: string) {
		this.majorId = majorId;
	}

	getMajor(): string {
		return this.majorId;
	}

	eval(std: Student, passedCourses: string[], cart: string[], course: string): boolean {
		return std.majorId === this.majorId;
	}
}