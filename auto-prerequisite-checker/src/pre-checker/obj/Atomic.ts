import Expression from "./Expression";

export default class Atomic extends Expression {
	#name;

	constructor(name?) {
		super();
		this.#name = name;
	}

	print() {
		console.log(this.#name);
	}

	eval(std, courses) {
		return true;
	}
}