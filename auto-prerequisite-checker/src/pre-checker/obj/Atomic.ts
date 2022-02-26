import Expression from "./Expression";
import { Student } from "../../student/data.type.decl";

export default class Atomic extends Expression {
	private name?: string;

	constructor(name?: string) {
		super();
		this.name = name;
	}

	public toString(): string {
		return this.name;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		return true;
	}
}