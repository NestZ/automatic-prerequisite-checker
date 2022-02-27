import Expression from "./Expression";
import { Student } from "../../student/data.type.decl";
import { EvalReturn } from "../data.type.decl";

export default class Major extends Expression {
	private facId: string;
	private majorId: string;
	private majorName: string;

	constructor(facId: string, majorId: string, majorName: string) {
		super();
		this.facId = facId;
		this.majorId = majorId;
		this.majorName = majorName;
	}

	public getMajorName(): string {
		return this.majorName;
	}

	public getMajorId(): string {
		return this.majorId;
	}

	public toString(): string {
		return this.majorName + ' major';
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string): EvalReturn {
		const valid: boolean = std.majorId === this.majorId && std.facId === this.facId;
		if(valid) return { valid, notSatisfiedCondition: null };
		return { valid, notSatisfiedCondition: this };
	}
}