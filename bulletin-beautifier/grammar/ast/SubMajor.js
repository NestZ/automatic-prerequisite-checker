const subMajorLst = ['microbiology', 'physical therapy', 'occupational therapy'];

export default class SubMajor {
	#subMajor;

	constructor(subMajor) {
		if(!subMajorLst.includes(subMajor)) throw "can't find " + subMajor + ' sub-major';
		this.#subMajor = subMajor;
	}

	getMajor() {
		return this.#subMajor;
	}

	eval(std, courses) {
		return std['major'] === this.#subMajor;
	}
}