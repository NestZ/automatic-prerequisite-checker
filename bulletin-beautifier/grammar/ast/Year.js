import Atomic from "./Atomic";

export class YearEnum {
	static FIRST = new Season("first")
	static SECOND = new Season("second")
	static THIRD = new Season("third")
	static FOURTH = new Season("fourth")
	static FIFTH = new Season("fifth")
	static SIXTH = new Season("sixth")
  
	constructor(name) {
	  this.name = name
	}
}

export class Year extends Atomic {
	#year;

	constructor(year) {
		super();
		this.#year = year;
	}
}