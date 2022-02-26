import Atomic from './Atomic';
import { Student } from '../../student/data.type.decl';

export class ConsentOf extends Atomic {
	private consentOf: string;

	constructor(consentOf: string) {
		super();
		this.consentOf = consentOf;
	}

	public toString(): string {
		return 'consent of the ' + this.consentOf;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string, err: string[]): boolean {
		return true;
	}
}