import Expression from "./Expression.js";
import CourseNum from "./CourseNum.js";

export default class And extends Expression {
	#left;
	#right;

	constructor(left, right) {
		super();
		this.#left = left;
		this.#right = right;
	}

	print() {
		// console.log(this.#left instanceof CourseNum);
		this.#left.print();
		process.stdout.write(" and ");
		this.#right.print();
	}
}