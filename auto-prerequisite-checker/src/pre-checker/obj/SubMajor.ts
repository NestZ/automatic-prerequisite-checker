import Expression from "./Expression";
import { Student } from "../../student/data.type.decl";
import { EvalReturn } from "../data.type.decl";

export default class SubMajor extends Expression {
	private subMajorId: string;

	constructor(subMajorId: string) {
		super();
		this.subMajorId = subMajorId;
	}

	public getDepId(): string {
		return this.subMajorId;
	}

	public toString(): string {
		return '';
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string): EvalReturn {
		//TODO: check sub-major
		const valid =  std.majorId === this.subMajorId;
		if(valid) return { valid, notSatisfiedCondition: null };
		else return { valid, notSatisfiedCondition: this };
	}
}