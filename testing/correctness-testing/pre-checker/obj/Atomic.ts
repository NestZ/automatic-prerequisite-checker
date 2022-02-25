import Expression from "./Expression";
import { Student } from "../data.type.decl";
import EqualAst from "../../main";

export default class Atomic extends Expression {
	private name?: string;

	constructor(name?: string) {
		super();
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}

	public print(): string {
		return this.name;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		return true;
	}

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		for(let i = 0;i < lst.length;i++) {
			if(EqualAst.cmpNodes(lst[i], this)) return truth[i];
		}
		throw "can't find matching node";
	}
}