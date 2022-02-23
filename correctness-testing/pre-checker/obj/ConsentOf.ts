import Atomic from './Atomic';
import { Student } from '../../../auto-prerequisite-checker/src/student/data.type.decl';

export class ConsentOfEnum {
	public static DEPARTMENT: ConsentOfEnum = new ConsentOfEnum('department');
	public static INSTRUCTOR: ConsentOfEnum = new ConsentOfEnum('instructor');
	public static FACULTY: ConsentOfEnum = new ConsentOfEnum('faculty');
	public static ADVISOR: ConsentOfEnum = new ConsentOfEnum('advisor');
	public static ACADEMIC_COMMITTEE: ConsentOfEnum = new ConsentOfEnum('academic committee');
	private name: string;
  
	constructor(name: string) {
	  this.name = name;
	}
}

export class ConsentOf extends Atomic {
	private consentOf: string;

	constructor(consentOf: string) {
		super();
		this.consentOf = consentOf;
	}

	print(): string {
		return 'consent of the ' + this.consentOf;
	}

	eval(std: Student, passedCourses: string[], cart: string[], course: string): boolean {
		return true;
	}
}