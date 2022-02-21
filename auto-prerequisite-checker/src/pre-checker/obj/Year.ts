import Atomic from './Atomic';
import { Student } from '../../student/data.type.decl';
import PreChecker from '../ast.builder';

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
		const stdYearStanding: number = PreChecker.getYear() - stdYear + 1;
		const reqYear: number = this.year;
		if(this.isAtLeast) return stdYearStanding <= reqYear;
		else return stdYearStanding === reqYear;
	}
}