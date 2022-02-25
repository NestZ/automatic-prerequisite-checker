import Expression from "./Expression";
import { Student } from "../data.type.decl";

export default class Atomic extends Expression {
	private name?: string;

	constructor(name?: string) {
		super();
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}

	public print(): string {
		return this.name;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		return true;
	}
}