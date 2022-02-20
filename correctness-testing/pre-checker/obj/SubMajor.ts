export default class SubMajor {
	private subMajorId: string;

	constructor(subMajorId: string) {
		this.subMajorId = subMajorId;
	}

	getMajor(): string {
		return this.subMajorId;
	}

	eval(std: any, courses: any): boolean {
		return std['major'] === this.subMajorId;
	}
}