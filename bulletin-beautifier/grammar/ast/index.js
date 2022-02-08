import antlr4 from 'antlr4';
import RegConditionLexer from './RegConditionLexer.js';
import RegConditionParser from './RegConditionParser.js';
import RegConditionListener from './RegConditionListener.js';
import AntlrToCondition from './AntlrToCondition.js';

const input = "for food science and technology students in optometry sub-major";
const chars = new antlr4.InputStream(input);
const lexer = new RegConditionLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new RegConditionParser(tokens);
parser.buildParseTrees = true;
const antlrTree = parser.condition();
const antlrToCondition = new AntlrToCondition();
const condition = antlrToCondition.visitCondition(antlrTree);

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
