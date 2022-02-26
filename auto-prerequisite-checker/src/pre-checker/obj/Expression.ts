import { Student } from "../../student/data.type.decl";

export default abstract class Expression {
	public toString?(): string;

	public setIsNon?(): void;

	public eval?(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean;
}