import Atomic from "./Atomic.js";

export class YearEnum {
	static FIRST = new YearEnum("first")
	static SECOND = new YearEnum("second")
	static THIRD = new YearEnum("third")
	static FOURTH = new YearEnum("fourth")
	static FIFTH = new YearEnum("fifth")
	static SIXTH = new YearEnum("sixth")
  
	constructor(name) {
	  this.name = name
	}
}

export class Year extends Atomic {
	#year;
	#isAtLeast;

	constructor(year, isAtLeast) {
		super();
		this.#year = year;
		this.#isAtLeast = isAtLeast;
	}

	getYear() {
		return this.#year;
	}

	print() {
		process.stdout.write(this.#year + " year standing");
	}
}