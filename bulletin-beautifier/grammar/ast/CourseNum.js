import Atomic from "./Atomic.js";

export default class CourseNum extends Atomic {
	#courseNum;

	constructor(courseNum) {
		super();
		this.#courseNum = courseNum;
	}

	print() {
		process.stdout.write(this.#courseNum);
	}
}