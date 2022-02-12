import AntlrToCondition from './antlr.to.condition';
import Expression from './obj/Expression';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { RegConditionLexer } from './parser/RegConditionLexer';
import { RegConditionParser } from './parser/RegConditionParser';
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
	[courseNum: string] : Expression
};

export default class PreChecker {
	static getAST() {
		const csv: Course[] = load('../bulletin-beautifier/csv/reg-condition-corres-refactored.csv');

		let astLst = <CourseCondition>{};

		csv.forEach((course, i) => {
			let inputStream = CharStreams.fromString(course['pre_en']);
			let lexer = new RegConditionLexer(inputStream);
			let tokenStream = new CommonTokenStream(lexer);
			let parser = new RegConditionParser(tokenStream);
			parser.buildParseTree = true;

			const antlrTree = parser.condition();
		
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
