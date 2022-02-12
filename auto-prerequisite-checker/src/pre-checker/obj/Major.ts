const majorLst = ['biology', 'english', 'government', 'japanese', 'french', 'environmental science', 'geology', 'statistics', 'material science', 'physics', 'early childhood-special education', 'home and community', 'mechanical engineering', 'food science and technology', 'psychology', 'history', 'mathematics', 'animal science', 'accountancy', 'biotechnology', 'animation', 'product development technology', 'biochemistry and biochemical technology', 'industrial engineering', 'civil engineering', 'german', 'finance and banking', 'chinese', 'agricultural extension', 'burmese', 'marketing', 'management', 'environmental engineering', 'economics', 'politics and government', 'international affairs', 'library science', 'tourism study', 'service business management', 'law', 'mass communication']

export default class Major {
	private major: string;

	constructor(major: string) {
		if(!majorLst.includes(major)) throw "can't find " + major + ' major';
		this.major = major;
	}

	getMajor(): string {
		return this.major;
	}

	eval(std: any, courses: any): boolean {
		return std['major'] === this.major;
	}
}