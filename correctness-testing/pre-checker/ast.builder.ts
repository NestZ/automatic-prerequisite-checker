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

	public static getFaculty(): FacultyData[] {
		if(PreChecker.faculty === null) {
			PreChecker.faculty = load('./faculty.csv');
		}
		return PreChecker.faculty;
	}

	public static getMajor(): MajorData[] {
		if(PreChecker.major === null) {
			PreChecker.major = load('./major.csv');
		}
		return PreChecker.major;
	}

	public static getSubMajor(): SubMajorData[] {
		if(PreChecker.subMajor === null) {
			PreChecker.subMajor = load('./sub_major.csv');
		}
		return PreChecker.subMajor;
	}

	public static getFacGroup(): FacGroupData[] {
		if(PreChecker.facGroup === null) {
			PreChecker.facGroup = load('./faculty_group.csv');
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

	public static facGroupId(facGroup: string) {
		const facGroupLst: FacGroupData[] = PreChecker.getFacGroup();
		for(const fg of facGroupLst) {
			if(fg.facGroupName.toLowerCase() === facGroup) {
				return fg.facGroupId;
			}
		}
		throw "can't find " + facGroup + ' faculty group';
	}

	public static getAST(): CourseCondition {
		const csv: Course[] = load('../bulletin-beautifier/csv/reg-condition-corres-refactored.csv');

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
			console.log(conditionStr);

		});

		return astLst;
	}
}
