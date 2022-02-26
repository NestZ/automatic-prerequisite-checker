import PreChecker from '../ast.builder';
import Expression from './Expression';
import { Student } from '../../student/data.type.decl';
import { EvalReturn } from '../data.type.decl';

export default class Year extends Expression {
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

	public getYearNumber(): number {
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

	public toString(): string {
		let str = '';
		if(this.isAtLeast) str += 'at least ';
		str += this.getYearName() + ' year standing';
		return str;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string): EvalReturn {
		const stdYear: number = parseInt(std.year);
		const stdYearStanding: number = PreChecker.getYear() - stdYear + 1;
		const reqYear: number = this.year;
		const valid: boolean = stdYearStanding >= reqYear;
		if(valid) return { valid, notSatisfiedCondition: null };
		return { valid, notSatisfiedCondition: this };
	}
}