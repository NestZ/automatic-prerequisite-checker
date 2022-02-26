import Expression from "./Expression";
import { Student } from "../../student/data.type.decl";
import { EvalReturn } from "../data.type.decl";

export default class Major extends Expression {
	private majorId: string;

	constructor(majorId: string) {
		super();
		this.majorId = majorId;
	}

	public getDepId(): string {
		return this.majorId;
	}

	public toString(): string {
		return '';
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string): EvalReturn {
		const valid: boolean = std.majorId === this.majorId;
		if(valid) return { valid, notSatisfiedCondition: null };
		return { valid, notSatisfiedCondition: this };
	}
}