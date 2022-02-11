import antlr4 from 'antlr4';
import * as fs from 'fs';
import csv from 'neat-csv';
import RegConditionLexer from './parser/RegConditionLexer.js';
import RegConditionParser from './parser/RegConditionParser.js';
import AntlrToCondition from './AntlrToCondition.js';

export default class PreChecker {
	static async getAST() {
		const raw = fs.readFileSync('../../../../bulletin-beautifier/csv/reg-condition-corres-refactored.csv', 'utf-8');
		const readCsv = async () => {
			const result = await csv(raw, { headers : true });
			return result;
		}
		const data = await readCsv();
		let astLst = {};

		for(const [i, course] of data.entries()) {
			const input = course['pre_en'];
			const chars = new antlr4.InputStream(input);
			const lexer = new RegConditionLexer(chars);
			const tokens = new antlr4.CommonTokenStream(lexer);
			const parser = new RegConditionParser(tokens);
			parser.buildParseTrees = true;
			const antlrTree = parser.condition();
		
			let antlrToCondition;
			let condition;
		
			try {
				antlrToCondition = new AntlrToCondition();
				condition = antlrToCondition.visitCondition(antlrTree);
			} catch(err) {
				console.log(i + '/' + data.length);
				console.log(err);
				console.log(course);
				process.exit();
			}

			const courseNum = course['courseno'];
			astLst[courseNum] = condition;
		}

		return astLst;
	}
}
