import Expression from "./Expression.js";

export default class Or extends Expression {
	#left;
	#right;

	constructor(left, right) {
		super();
		this.#left = left;
		this.#right = right;
	}

	print() {
		this.#left.print();
		process.stdout.write(" or ");
		this.#right.print();
	}
}