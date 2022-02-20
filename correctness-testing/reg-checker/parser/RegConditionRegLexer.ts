// Generated from reg-checker/RegConditionReg.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class RegConditionRegLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly YEAR = 10;
	public static readonly COURSE_NUM = 11;
	public static readonly FIELD_NUM = 12;
	public static readonly LEVEL_NUM = 13;
	public static readonly AND = 14;
	public static readonly OR = 15;
	public static readonly FIELD = 16;
	public static readonly EQ = 17;
	public static readonly WS = 18;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"YEAR", "COURSE_NUM", "FIELD_NUM", "LEVEL_NUM", "AND", "OR", "FIELD", 
		"EQ", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'not'", "'none'", "'fac'", "'ma'", "'lev'", 
		"'con'", "'consent'", undefined, undefined, undefined, undefined, "'and'", 
		"'or'", undefined, "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "YEAR", "COURSE_NUM", "FIELD_NUM", "LEVEL_NUM", 
		"AND", "OR", "FIELD", "EQ", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RegConditionRegLexer._LITERAL_NAMES, RegConditionRegLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RegConditionRegLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(RegConditionRegLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "RegConditionReg.g4"; }

	// @Override
	public get ruleNames(): string[] { return RegConditionRegLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return RegConditionRegLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return RegConditionRegLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return RegConditionRegLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14}\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x05\v^\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x11\x06\x11t\n\x11\r\x11\x0E\x11u\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x13\x02\x02\x02\x14\x03\x02\x03\x05\x02" +
		"\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
		"\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11" +
		"!\x02\x12#\x02\x13%\x02\x14\x03\x02\x05\x03\x022;\x04\x02./c|\x04\x02" +
		"\f\f\"\"\x02\x82\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
		"\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03" +
		"\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03" +
		"\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03" +
		"\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03" +
		"\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02" +
		"\x02\x03\'\x03\x02\x02\x02\x05)\x03\x02\x02\x02\x07+\x03\x02\x02\x02\t" +
		"/\x03\x02\x02\x02\v4\x03\x02\x02\x02\r8\x03\x02\x02\x02\x0F;\x03\x02\x02" +
		"\x02\x11?\x03\x02\x02\x02\x13C\x03\x02\x02\x02\x15]\x03\x02\x02\x02\x17" +
		"_\x03\x02\x02\x02\x19f\x03\x02\x02\x02\x1Bi\x03\x02\x02\x02\x1Dk\x03\x02" +
		"\x02\x02\x1Fo\x03\x02\x02\x02!s\x03\x02\x02\x02#w\x03\x02\x02\x02%y\x03" +
		"\x02\x02\x02\'(\x07*\x02\x02(\x04\x03\x02\x02\x02)*\x07+\x02\x02*\x06" +
		"\x03\x02\x02\x02+,\x07p\x02\x02,-\x07q\x02\x02-.\x07v\x02\x02.\b\x03\x02" +
		"\x02\x02/0\x07p\x02\x0201\x07q\x02\x0212\x07p\x02\x0223\x07g\x02\x023" +
		"\n\x03\x02\x02\x0245\x07h\x02\x0256\x07c\x02\x0267\x07e\x02\x027\f\x03" +
		"\x02\x02\x0289\x07o\x02\x029:\x07c\x02\x02:\x0E\x03\x02\x02\x02;<\x07" +
		"n\x02\x02<=\x07g\x02\x02=>\x07x\x02\x02>\x10\x03\x02\x02\x02?@\x07e\x02" +
		"\x02@A\x07q\x02\x02AB\x07p\x02\x02B\x12\x03\x02\x02\x02CD\x07e\x02\x02" +
		"DE\x07q\x02\x02EF\x07p\x02\x02FG\x07u\x02\x02GH\x07g\x02\x02HI\x07p\x02" +
		"\x02IJ\x07v\x02\x02J\x14\x03\x02\x02\x02KL\x073\x02\x02LM\x07u\x02\x02" +
		"M^\x07v\x02\x02NO\x074\x02\x02OP\x07p\x02\x02P^\x07f\x02\x02QR\x075\x02" +
		"\x02RS\x07t\x02\x02S^\x07f\x02\x02TU\x076\x02\x02UV\x07v\x02\x02V^\x07" +
		"j\x02\x02WX\x077\x02\x02XY\x07v\x02\x02Y^\x07j\x02\x02Z[\x078\x02\x02" +
		"[\\\x07v\x02\x02\\^\x07j\x02\x02]K\x03\x02\x02\x02]N\x03\x02\x02\x02]" +
		"Q\x03\x02\x02\x02]T\x03\x02\x02\x02]W\x03\x02\x02\x02]Z\x03\x02\x02\x02" +
		"^\x16\x03\x02\x02\x02_`\t\x02\x02\x02`a\t\x02\x02\x02ab\t\x02\x02\x02" +
		"bc\t\x02\x02\x02cd\t\x02\x02\x02de\t\x02\x02\x02e\x18\x03\x02\x02\x02" +
		"fg\t\x02\x02\x02gh\t\x02\x02\x02h\x1A\x03\x02\x02\x02ij\t\x02\x02\x02" +
		"j\x1C\x03\x02\x02\x02kl\x07c\x02\x02lm\x07p\x02\x02mn\x07f\x02\x02n\x1E" +
		"\x03\x02\x02\x02op\x07q\x02\x02pq\x07t\x02\x02q \x03\x02\x02\x02rt\t\x03" +
		"\x02\x02sr\x03\x02\x02\x02tu\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02" +
		"\x02\x02v\"\x03\x02\x02\x02wx\x07?\x02\x02x$\x03\x02\x02\x02yz\t\x04\x02" +
		"\x02z{\x03\x02\x02\x02{|\b\x13\x02\x02|&\x03\x02\x02\x02\x05\x02]u\x03" +
		"\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RegConditionRegLexer.__ATN) {
			RegConditionRegLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RegConditionRegLexer._serializedATN));
		}

		return RegConditionRegLexer.__ATN;
	}

}

