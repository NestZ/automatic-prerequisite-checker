import Expression from "./Expression";
import { Student } from "../../student/data.type.decl";
import { EvalReturn } from "../data.type.decl";

export default class None implements Expression {
	public toString(): string {
		return 'none';
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string): EvalReturn {
		return { valid: true, notSatisfiedCondition: null };
	}
}