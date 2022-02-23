import { Student } from "../../student/data.type.decl";

export default abstract class Expression {
	print?(): string;

	setIsNon?(): void;

	eval?(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean;
}