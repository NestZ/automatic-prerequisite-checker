import AntlrToCondition from './antlr.to.condition';
import Expression from './obj/Expression';
import { CharStreams, CodePointCharStream, CommonTokenStream } from 'antlr4ts';
import { RegConditionLexer } from './parser/RegConditionLexer';
import { ConditionContext, RegConditionParser } from './parser/RegConditionParser';
import { load } from 'csv-load-sync';
import Condition from './obj/Condition';

type Course = {
	courseno: string,
	title_long_en: string,
	degree_level: string,
	pre_en: string,
	year_end: string,
	open_status: string,
};

type CourseCondition = {
	[courseNum: string]: Condition;
};

export default class PreChecker {
	private static faculty: any[] = null;
	private static major: any[] = null;
	private static subMajor: any[] = null;
	private static facGroup: any[] = null;

	public static getFaculty(): any[] {
		if(PreChecker.faculty === null) {
			PreChecker.faculty = load('./faculty.csv');
		}
		return PreChecker.faculty;
	}

	public static getMajor(): any[] {
		if(PreChecker.major === null) {
			PreChecker.major = load('./major.csv');
		}
		return PreChecker.major;
	}

	public static getSubMajor(): any[] {
		if(PreChecker.subMajor === null) {
			PreChecker.subMajor = load('./sub_major.csv');
		}
		return PreChecker.subMajor;
	}

	public static getFacGroup(): any[] {
		if(PreChecker.facGroup === null) {
			PreChecker.facGroup = load('./faculty_group.csv');
		}
		return PreChecker.facGroup;
	}

	public static facultyId(faculty: string): string {
		const facLst: any[] = PreChecker.getFaculty();
		for(const fac of facLst) {
			if((fac['facName'] as string).toLowerCase() === faculty) {
				return fac['facId'];
			}
		}
		throw "can't find " + faculty + ' faculty';
	}

	public static majorId(facultyId: string, major: string): string {
		const facLst: any[] = PreChecker.getMajor().filter(
			(fac: any) => {
				return fac['facId'] === facultyId;
			}
		);
		for(const fac of facLst) {
			if(fac['majorName'].toLowerCase() === major) {
				return fac['majorId'] as string;
			}
		}
		throw "can't find " + major + ' major';
	}

	public static facGroupId(facGroup: string) {
		const facGroupLst: any[] = PreChecker.getFacGroup();
		for(const fg of facGroupLst) {
			if(fg['facGroupName'].toLowerCase() === facGroup) {
				return fg['facGroupId'] as string;
			}
		}
		throw "can't find " + facGroup + ' faculty group';
	}

	public static getAST(): CourseCondition {
		const csv: Course[] = load('../bulletin-beautifier/csv/reg-condition-corres-refactored.csv');

		let astLst: CourseCondition = <CourseCondition>{};

		csv.forEach((course: Course, i: number) => {
			let inputStream: CodePointCharStream = CharStreams.fromString(course['pre_en']);
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

			const courseNum = course['courseno'];
			astLst[courseNum] = condition;

			const conditionStr = astLst[courseNum].print();
			console.log(conditionStr);

		});

		return astLst;
	}
}
