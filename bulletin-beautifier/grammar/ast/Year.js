import Atomic from './Atomic.js';

export class YearEnum {
	static FIRST = new YearEnum('first')
	static SECOND = new YearEnum('second')
	static THIRD = new YearEnum('third')
	static FOURTH = new YearEnum('fourth')
	static FIFTH = new YearEnum('fifth')
	static SIXTH = new YearEnum('sixth')
  
	constructor(name) {
	  this.name = name
	}
}

export class Year extends Atomic {
	#year;
	#isAtLeast;

	constructor(year, isAtLeast) {
		super();
		//TODO : fix this to integer
		this.#year = year;
		this.#isAtLeast = isAtLeast;
	}

	getYear() {
		return this.#year;
	}

	print() {
		if(this.#isAtLeast) process.stdout.write('at least ');
		process.stdout.write(this.#year + ' year standing');
	}

	eval(std, courses) {
		const stdYear = parseInt(std['year']);
		const reqYear = parseInt(this.#year);
		if(this.#isAtLeast) return stdYear <= reqYear;
		else return stdYear === reqYear;
	}
}