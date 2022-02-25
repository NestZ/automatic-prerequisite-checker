import Atomic from './Atomic';
import { Student } from '../data.type.decl';
import PreChecker from '../ast.builder';

export class Year extends Atomic {
	private year: number;
	private isAtLeast: boolean;

	constructor(year: number, isAtLeast: boolean) {
		super();
		this.year = year;
		this.isAtLeast = isAtLeast;
	}

	public getIsAtLeast(): boolean {
		return this.isAtLeast;
	}

	public getYear(): number {
		return this.year;
	}

	public getYearName(): string {
		switch(this.year) {
			case 1: {
				return 'first';
			} case 2: {
				return 'second';
			} case 3: {
				return 'third';
			} case 4: {
				return 'fourth';
			} case 5: {
				return 'fifth';
			} default: {
				return 'sixth';
			}
		}
	}

	public print(): string {
		let str = '';
		if(this.isAtLeast) str += 'at least ';
		str += this.getYearName() + ' year standing';
		return str;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		const stdYear: number = parseInt(std.year);
		const stdYearStanding: number = PreChecker.getYear() - stdYear + 1;
		const reqYear: number = this.year;
		const res: boolean = stdYearStanding >= reqYear;
		if(!res) {
			const errStr = 'requires ' + this.print();
			err.push(errStr);
		}
		return res;
	}
}