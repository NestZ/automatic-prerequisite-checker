import { Student } from "../data.type.decl";

export default abstract class Expression {
	private isNon: boolean = false;
	
	public print?(): string;

	public setIsNon(): void {
		this.isNon = true;
	}

	public getIsNon(): boolean {
		return this.isNon;
	}

	public eval?(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean;

	public evalTest?(lst: Expression[], truth: Array<boolean>): boolean;
}