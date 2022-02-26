import { Student } from "../../student/data.type.decl";
import Expression from "./Expression";

export default class None implements Expression {
	public toString(): string {
		return 'none';
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		return true;
	}
}