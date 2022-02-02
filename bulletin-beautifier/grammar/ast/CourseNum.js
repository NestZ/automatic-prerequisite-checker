import Atomic from "./Atomic";

export default class CourseNum extends Atomic {
	#courseNum;

	constructor(courseNum) {
		super();
		this.#courseNum = courseNum;
	}
}