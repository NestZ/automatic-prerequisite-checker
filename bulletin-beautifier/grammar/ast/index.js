import antlr4 from 'antlr4';
import RegConditionLexer from './RegConditionLexer.js';
import RegConditionParser from './RegConditionParser.js';
import RegConditionListener from './RegConditionListener.js';
import AntlrToCondition from './AntlrToCondition.js';

const input = "(123456 and 123456) and non medicine students in optometry sub-major";
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
