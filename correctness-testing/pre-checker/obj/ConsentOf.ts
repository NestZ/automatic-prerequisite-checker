import Atomic from './Atomic';

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

	eval(std: any, courses: any): boolean {
		return true;
	}
}