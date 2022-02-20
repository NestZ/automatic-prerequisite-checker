import Expression from "./Expression";
import { Student } from "../../../auto-prerequisite-checker/src/student/data.type.decl";

export default class Atomic extends Expression {
	private name?: string;

	constructor(name?: string) {
		super();
		this.name = name;
	}

	print(): string {
		return this.name;
	}

	eval(std: Student, passedCourses: string[], cart: string[], course: string): boolean {
		return true;
	}
}