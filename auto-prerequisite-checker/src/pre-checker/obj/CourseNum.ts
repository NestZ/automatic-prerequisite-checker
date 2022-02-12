import Atomic from "./Atomic";

export default class CourseNum extends Atomic {
	private courseNum: string;

	constructor(courseNum: string) {
		super();
		this.courseNum = courseNum;
	}

	print(): void {
		console.log(this.courseNum);
	}

	eval(std: any, courses: any): boolean {
		for(const year in courses) {
			for(const semester in courses[year]) {
				for(const course in courses[year][semester]) {
					if(course === this.courseNum) return true;
				}
			}
		}
		return false;
	}
}