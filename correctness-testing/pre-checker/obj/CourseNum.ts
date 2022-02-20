import Atomic from "./Atomic";

export default class CourseNum extends Atomic {
	private courseNum: string;
	private isConcurrent: boolean;

	constructor(courseNum: string, isConcurrent: boolean) {
		super();
		this.courseNum = courseNum;
		this.isConcurrent = isConcurrent;
	}

	print(): string {
		if(this.isConcurrent) return 'concurrent to ' + this.courseNum;
		return this.courseNum;
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