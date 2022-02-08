import Expression from "./Expression.js";

export default class Atomic extends Expression {
	#name;

	constructor(name) {
		super();
		this.#name = name;
	}

	print() {
		process.stdout.write(this.#name);
	}

	eval(std, courses) {
		return true;
	}
}