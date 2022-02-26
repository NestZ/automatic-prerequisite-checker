import { Student } from "../../student/data.type.decl";

export default abstract class Expression {
	abstract toString(): string;

	abstract eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean;
}