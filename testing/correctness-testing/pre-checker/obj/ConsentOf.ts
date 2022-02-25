import Atomic from './Atomic';
import { Student } from '../data.type.decl';

export class ConsentOf extends Atomic {
	private consentOf: string;

	constructor(consentOf: string) {
		super();
		this.consentOf = consentOf;
	}

	public print(): string {
		return 'consent of the ' + this.consentOf;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		return true;
	}
}