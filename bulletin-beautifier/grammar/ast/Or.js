import Expression from "./Expression";

export default class Or extends Expression {
	#left;
	#right;

	constructor(left, right) {
		super();
		this.#left = left;
		this.#right = right;
	}
}