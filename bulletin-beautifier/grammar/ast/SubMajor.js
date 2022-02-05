export default class SubMajor {
	#subMajor;

	constructor(subMajor) {
		this.#subMajor = subMajor;
	}

	getMajor() {
		return this.#subMajor;
	}
}