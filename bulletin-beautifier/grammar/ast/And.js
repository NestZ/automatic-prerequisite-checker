import Expression from "./Expression.js";

export default class And extends Expression {
	#left;
	#right;

	constructor(left, right) {
		super();
		this.#left = left;
		this.#right = right;
	}

	print() {
		this.#left.print();
		process.stdout.write(" and ");
		this.#right.print();
	}

	eval(std, courses) {
		return this.#left.eval(std, courses) && this.#right.eval(std, courses);
	}
}