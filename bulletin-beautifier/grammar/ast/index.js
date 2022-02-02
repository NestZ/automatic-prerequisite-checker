import antlr4 from 'antlr4';
import RegConditionLexer from './RegConditionLexer.js';
import RegConditionParser from './RegConditionParser.js';
import RegConditionListener from './RegConditionListener.js';

const input = "200111 and 200123"
const chars = new antlr4.InputStream(input);
const lexer = new RegConditionLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new RegConditionParser(tokens);
parser.buildParseTrees = true;
const antlrTree = parser.condition();
