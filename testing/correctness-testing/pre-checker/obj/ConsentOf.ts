import Atomic from './Atomic';
import Expression from './Expression';
import { Student } from '../data.type.decl';
import EqualAst from '../../main';

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

	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		for(let i = 0;i < lst.length;i++) {
			if(EqualAst.cmpNodes(lst[i], this)) return truth[i];
		}
		throw "can't find matching node";
	}
}