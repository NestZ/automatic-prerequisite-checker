import AntlrToCondition from './antlr.to.condition';
import Condition from './obj/Condition';
import { CharStreams, CodePointCharStream, CommonTokenStream } from 'antlr4ts';
import { RegConditionLexer } from './parser/RegConditionLexer';
import { ConditionContext, RegConditionParser } from './parser/RegConditionParser';
import { load } from 'csv-load-sync';
import { Course, CourseCondition, FacGroupData, FacultyData, MajorData, SubMajorData } from './data.type.decl';

export default class PreChecker {
	private static faculty: FacultyData[] = null;
	private static major: MajorData[] = null;
	private static subMajor: SubMajorData[] = null;
	private static facGroup: FacGroupData[] = null;
	private static scienceBased: FacultyData[] = null;
	private static academicYear: number;

	public static getFaculty(): FacultyData[] {
		if(PreChecker.faculty === null) {
			PreChecker.faculty = load('src/pre-checker/csv/faculty.csv');
		}
		return PreChecker.faculty;
	}

	public static getMajor(): MajorData[] {
		if(PreChecker.major === null) {
			PreChecker.major = load('src/pre-checker/csv/major.csv');
		}
		return PreChecker.major;
	}

	public static getSubMajor(): SubMajorData[] {
		if(PreChecker.subMajor === null) {
			PreChecker.subMajor = load('src/pre-checker/csv/sub_major.csv');
		}
		return PreChecker.subMajor;
	}

	public static getFacGroup(): FacGroupData[] {
		if(PreChecker.facGroup === null) {
			PreChecker.facGroup = load('src/pre-checker/csv/faculty_group.csv');
		}
		return PreChecker.facGroup;
	}

	public static getScienceBased(): FacultyData[] {
		if(PreChecker.scienceBased === null) {
			PreChecker.scienceBased = PreChecker.getFaculty().filter(
				(fac: FacultyData) => {
					if(fac.isScienceBased === '1') {
						return true;
					}
				}
			);
		}
		return PreChecker.scienceBased;
	}

	public static facultyId(faculty: string): string {
		const facLst: FacultyData[] = PreChecker.getFaculty();
		for(const fac of facLst) {
			if(fac.facName.toLowerCase() === faculty) {
				return fac.facId;
			}
		}
		throw "can't find " + faculty + ' faculty';
	}

	public static facultyName(facultyId: string): string {
		const facLst: FacultyData[] = PreChecker.getFaculty();
		for(const fac of facLst) {
			if(fac.facId === facultyId) {
				return fac.facName;
			}
		}
		throw "can't find faculty with id " + facultyId;
	}

	public static majorId(facultyId: string, major: string): string {
		const facLst: MajorData[] = PreChecker.getMajor().filter(
			(fac: MajorData) => {
				return fac.facId === facultyId;
			}
		);
		for(const fac of facLst) {
			if(fac.majorName.toLowerCase() === major) {
				return fac.majorId;
			}
		}
		throw "can't find " + major + ' major';
	}

	public static majorName(facultyId: string, majorId: string): string {
		const facLst: MajorData[] = PreChecker.getMajor().filter(
			(fac: MajorData) => {
				return fac.facId === facultyId;
			}
		);
		for(const fac of facLst) {
			if(fac.majorId === majorId && fac.facId === facultyId) {
				return fac.majorName;
			}
		}
		throw "can't find major with id " + majorId;
	}

	public static subMajorId(facultyId: string, subMajor: string): string {
		const facLst: SubMajorData[] = PreChecker.getSubMajor().filter(
			(fac: SubMajorData) => {
				return fac.facId === facultyId;
			}
		);
		for(const fac of facLst) {
			if(fac.subMajorName.toLowerCase() === subMajor) {
				return fac.subMajorId;
			}
		}
		throw "can't find " + subMajor + ' sub-major';
	}

	public static subMajorName(facultyId: string, subMajorId: string): string {
		const facLst: SubMajorData[] = PreChecker.getSubMajor().filter(
			(fac: SubMajorData) => {
				return fac.facId === facultyId;
			}
		);
		for(const fac of facLst) {
			if(fac.facId === facultyId && fac.subMajorId === subMajorId) {
				return fac.subMajorName;
			}
		}
		throw "can't find sub-major with id " + subMajorId;
	}

	public static facGroupId(facGroup: string): string {
		const facGroupLst: FacGroupData[] = PreChecker.getFacGroup();
		for(const fg of facGroupLst) {
			if(fg.facGroupName.toLowerCase() === facGroup) {
				return fg.facGroupId;
			}
		}
		throw "can't find " + facGroup + ' faculty group';
	}

	public static facGroupName(facGroupId: string): string {
		const facGroupLst: FacGroupData[] = PreChecker.getFacGroup();
		for(const fg of facGroupLst) {
			if(fg.facGroupId === facGroupId) {
				return fg.facGroupName;
			}
		}
		throw "can't find faculty group with id " + facGroupId;
	}

	public static setYear(year: number): void {
		PreChecker.academicYear = year;
	}

	public static getYear(): number {
		return PreChecker.academicYear;
	}

	public static getAST(): CourseCondition {
		const csv: Course[] = load('src/pre-checker/csv/reg-condition-corres-refactored.csv');

		let astLst: CourseCondition = <CourseCondition>{};

		csv.forEach((course: Course, i: number) => {
			let inputStream: CodePointCharStream = CharStreams.fromString(course.pre_en);
			let lexer: RegConditionLexer = new RegConditionLexer(inputStream);
			let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
			let parser: RegConditionParser = new RegConditionParser(tokenStream);
			parser.buildParseTree = true;

			const antlrTree: ConditionContext = parser.condition();
		
			let antlrToCondition: AntlrToCondition;
			let condition: Condition;
		
			try {
				antlrToCondition = new AntlrToCondition();
				condition = antlrToCondition.visitCondition(antlrTree);
			} catch(err) {
				console.log(i + '/' + csv.length);
				console.log(err);
				console.log(course);
				throw '';
			}

			const courseNum = course.courseno;
			astLst[courseNum] = condition;

			const conditionStr = astLst[courseNum].print();
			// console.log(conditionStr);

		});

		return astLst;
	}
}
