import Atomic from './Atomic';

export class YearEnum {
	public static FIRST: YearEnum = new YearEnum('first')
	public static SECOND: YearEnum = new YearEnum('second')
	public static THIRD: YearEnum = new YearEnum('third')
	public static FOURTH: YearEnum = new YearEnum('fourth')
	public static FIFTH: YearEnum = new YearEnum('fifth')
	public static SIXTH: YearEnum = new YearEnum('sixth')
	private name: string;
  
	constructor(name: string) {
	  this.name = name
	}
}

export class Year extends Atomic {
	private year: string;
	private isAtLeast: boolean;

	constructor(year: string, isAtLeast: boolean) {
		super();
		//TODO : fix this to integer
		this.year = year;
		this.isAtLeast = isAtLeast;
	}

	getYear(): string {
		return this.year;
	}

	print(): void {
		if(this.isAtLeast) console.log('at least ');
		console.log(this.year + ' year standing');
	}

	eval(std: any, courses: any): boolean {
		const stdYear: number = parseInt(std['year']);
		const reqYear: number = parseInt(this.year);
		if(this.isAtLeast) return stdYear <= reqYear;
		else return stdYear === reqYear;
	}
}