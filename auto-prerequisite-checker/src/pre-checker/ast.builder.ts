import AntlrToCondition from './antlr.to.condition';
import Expression from './obj/Expression';
import { CharStreams, CodePointCharStream, CommonTokenStream } from 'antlr4ts';
import { RegConditionLexer } from './parser/RegConditionLexer';
import { ConditionContext, RegConditionParser } from './parser/RegConditionParser';
import { load } from 'csv-load-sync';

type Course = {
	courseno: string,
	title_long_en: string,
	degree_level: string,
	pre_en: string,
	year_end: string,
	open_status: string,
};

type CourseCondition = {
	[courseNum: string]: Expression
};

export default class PreChecker {
	static getAST(): CourseCondition {
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
			let condition: Expression;
		
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
			astLst[courseNum].print();
		});

		return astLst;
	}
}
