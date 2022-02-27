import Expression from "./Expression";
import { Student } from "../../student/data.type.decl";
import { EvalReturn } from "../data.type.decl";

export default class SubMajor extends Expression {
	private facId: string;
	private majorId: string;
	private subMajorId: string;
	private subMajorName: string;

	constructor(facId: string, majorId: string, subMajorId: string, subMajorName: string) {
		super();
		this.facId = facId;
		this.majorId = majorId;
		this.subMajorId = subMajorId;
		this.subMajorName = subMajorName;
	}

	public getSubMajorName(): string {
		return this.subMajorName;
	}

	public getMajorId(): string {
		return this.majorId;
	}

	public getSubMajorId(): string {
		return this.subMajorId;
	}

	public toString(): string {
		return this.subMajorName + ' sub-major';
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string): EvalReturn {
		const valid =  std.majorId === this.majorId && std.facId === this.facId;
		if(valid) return { valid, notSatisfiedCondition: null };
		else return { valid, notSatisfiedCondition: this };
	}
}