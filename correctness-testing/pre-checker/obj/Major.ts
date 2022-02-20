export default class Major {
	private majorId: string;

	constructor(majorId: string) {
		this.majorId = majorId;
	}

	getMajor(): string {
		return this.majorId;
	}

	eval(std: any, courses: any): boolean {
		return std['major'] === this.majorId;
	}
}