import Atomic from './Atomic';
import { Student } from '../../../auto-prerequisite-checker/src/student/data.type.decl';

export class Year extends Atomic {
	private year: number;
	private isAtLeast: boolean;

	constructor(year: number, isAtLeast: boolean) {
		super();
		this.year = year;
		this.isAtLeast = isAtLeast;
	}

	getYear(): number {
		return this.year;
	}

	print(): string {
		let str = '';
		if(this.isAtLeast) str += 'at least ';
		str += this.year + ' year standing';
		return str;
	}

	eval(std: Student, passedCourses: string[], cart: string[], course: string): boolean {
		const stdYear: number = parseInt(std.year);
		const stdYearStanding: number = 2564 - stdYear + 1;
		const reqYear: number = this.year;
		if(this.isAtLeast) return stdYear <= reqYear;
		else return stdYear === reqYear;
	}
}