import Expression from './Expression';
import { Student } from '../../student/data.type.decl';
import { EvalReturn } from '../data.type.decl';

export default class ConsentOf extends Expression {
	private consentOf: string;

	constructor(consentOf: string) {
		super();
		this.consentOf = consentOf;
	}

	public toString(): string {
		return 'consent of the ' + this.consentOf;
	}

	public eval(std: Student, passedCourses: string[], cart: string[], course: string): EvalReturn {
		return { valid: true, notSatisfiedCondition: null };
	}
}