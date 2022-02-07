export default class Major {
	#major;

	constructor(major) {
		this.#major = major;
	}

	getMajor() {
		return this.#major;
	}

	eval(std, courses) {
		return std["major"] === this.#major;
	}
}