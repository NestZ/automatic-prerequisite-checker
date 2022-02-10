import antlr4 from 'antlr4';
import RegConditionLexer from './RegConditionLexer.js';
import RegConditionParser from './RegConditionParser.js';
import RegConditionListener from './RegConditionListener.js';
import AntlrToCondition from './AntlrToCondition.js';
import * as fs from 'fs';
import csv from 'neat-csv';
// const csv = require('neat-csv');

const raw = fs.readFileSync('../../csv/reg-condition-corres-refactored.csv', 'utf-8');

const readCsv = async () => {
	const result = await csv(raw, { header : true });
	return result;
}

const data = await readCsv();
console.log(data);
process.exit();

// test with all conditions from csv file
const input = "for engineering students in microbiology sub-major";
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
	console.log(err);
	process.exit();
}

condition.print();
console.log();

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
