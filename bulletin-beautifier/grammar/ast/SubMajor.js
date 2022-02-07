export default class SubMajor {
	#subMajor;

	constructor(subMajor) {
		this.#subMajor = subMajor;
	}

	getMajor() {
		return this.#subMajor;
	}

	eval(std, courses) {
		return std["major"] === this.#subMajor;
	}
}