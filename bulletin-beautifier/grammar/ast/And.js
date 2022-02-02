import Expression from "./Expression";

export default class And extends Expression {
	#left;
	#right;

	constructor(left, right) {
		super();
		this.#left = left;
		this.#right = right;
	}
}