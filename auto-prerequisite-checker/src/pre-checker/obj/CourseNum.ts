import Atomic from "./Atomic";

export default class CourseNum extends Atomic {
	#courseNum;

	constructor(courseNum) {
		super();
		this.#courseNum = courseNum;
	}

	print() {
		console.log(this.#courseNum);
	}

	eval(std, courses) {
		for(const year in courses) {
			for(const semester in courses[year]) {
				for(const course in courses[year][semester]) {
					if(course === this.#courseNum) return true;
				}
			}
		}
		return false;
	}
}