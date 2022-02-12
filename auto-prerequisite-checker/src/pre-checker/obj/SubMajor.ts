const subMajorLst = ['microbiology', 'physical therapy', 'occupational therapy'];

export default class SubMajor {
	private subMajor: string;

	constructor(subMajor: string) {
		if(!subMajorLst.includes(subMajor)) throw "can't find " + subMajor + ' sub-major';
		this.subMajor = subMajor;
	}

	getMajor(): string {
		return this.subMajor;
	}

	eval(std: any, courses: any): boolean {
		return std['major'] === this.subMajor;
	}
}