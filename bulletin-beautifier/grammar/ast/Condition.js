export default class Condition {
	#expr;

	constructor(expr) {
		this.#expr = expr;
	}

	getExpression() {
		return this.#expr;
	}

	print() {
		this.#expr.print();
	}
}