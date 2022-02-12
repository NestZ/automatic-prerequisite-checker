import Expression from "./Expression";

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
		console.log(" or ");
		this.#right.print();
	}

	eval(std, courses) {
		return this.#left.eval(std, courses) || this.#right.eval(std, courses);
	}
}