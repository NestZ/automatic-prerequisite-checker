import antlr4 from 'antlr4';
import RegConditionLexer from './parser/RegConditionLexer.js';
import RegConditionParser from './parser/RegConditionParser.js';
import AntlrToCondition from './AntlrToCondition.js';
import * as fs from 'fs';
import csv from 'neat-csv';
import PreChecker from './pre-checker.js';

const test = PreChecker.getAST();
process.exit();

const raw = fs.readFileSync('../../../../bulletin-beautifier/csv/reg-condition-corres-refactored.csv', 'utf-8');

const readCsv = async () => {
	const result = await csv(raw, { header : true });
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

	// const courseNum = course['courseno'];
	// astLst[courseNum] = condition;
	// astLst[courseNum].print();
}

process.exit();

const std = {
	"faculty" : "engineering",
	"year" : "2561",
	"major" : "civil engineering"
};
const courses = {
	"61" : {
		"1" : {
			"100000" : "A",
			"100001" : "D",
		},
		"2" : {
			"100002" : "B+",
			"100003" : "D",
		}
	},
	"62" : {
		"1" : {
			"100004" : "A",
			"100005" : "B+"
		},
		"2" : {
			"100006" : "C",
			"100007" : "B"
		}
	}
};

const canReg = condition.eval(std, courses);
console.log(canReg);
