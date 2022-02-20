import Expression from "./Expression";

export default class Atomic extends Expression {
	private name?: string;

	constructor(name?: string) {
		super();
		this.name = name;
	}

	print(): string {
		return this.name;
	}

	eval(std: any, courses: any): boolean {
		return true;
	}
}