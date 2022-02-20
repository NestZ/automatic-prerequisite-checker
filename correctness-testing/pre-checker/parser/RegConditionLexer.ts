// Generated from RegCondition.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class RegConditionLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly CONSENT_OF = 16;
	public static readonly YEAR = 17;
	public static readonly COURSE_NUM = 18;
	public static readonly AND = 19;
	public static readonly OR = 20;
	public static readonly FIELD = 21;
	public static readonly WS = 22;

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
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "CONSENT_OF", "YEAR", 
		"COURSE_NUM", "AND", "OR", "FIELD", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'none'", "'see bulletin'", "'for'", "'not for'", 
		"'students'", "'students in'", "'group'", "'major'", "'sub-major'", "'concurrent to'", 
		"'year standing'", "'at least'", "'consent of the'", undefined, undefined, 
		undefined, "'and'", "'or'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "CONSENT_OF", "YEAR", "COURSE_NUM", "AND", "OR", 
		"FIELD", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RegConditionLexer._LITERAL_NAMES, RegConditionLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RegConditionLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(RegConditionLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "RegCondition.g4"; }

	// @Override
	public get ruleNames(): string[] { return RegConditionLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return RegConditionLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return RegConditionLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return RegConditionLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x18\u011F\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xE5\n\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0107\n\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x03\x16\x06\x16\u0118\n\x16\r\x16\x0E\x16\u0119\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x02\x02\x02\x18\x03\x02\x03\x05\x02\x04\x07" +
		"\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15" +
		"\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02" +
		"\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18\x03\x02\x05" +
		"\x03\x022;\x04\x02./c|\x04\x02\f\f\"\"\x02\u0128\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
		"\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
		"\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
		"\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
		"#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
		"\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x03/\x03\x02\x02" +
		"\x02\x051\x03\x02\x02\x02\x073\x03\x02\x02\x02\t8\x03\x02\x02\x02\vE\x03" +
		"\x02\x02\x02\rI\x03\x02\x02\x02\x0FQ\x03\x02\x02\x02\x11Z\x03\x02\x02" +
		"\x02\x13f\x03\x02\x02\x02\x15l\x03\x02\x02\x02\x17r\x03\x02\x02\x02\x19" +
		"|\x03\x02\x02\x02\x1B\x8A\x03\x02\x02\x02\x1D\x98\x03\x02\x02\x02\x1F" +
		"\xA1\x03\x02\x02\x02!\xE4\x03\x02\x02\x02#\u0106\x03\x02\x02\x02%\u0108" +
		"\x03\x02\x02\x02\'\u010F\x03\x02\x02\x02)\u0113\x03\x02\x02\x02+\u0117" +
		"\x03\x02\x02\x02-\u011B\x03\x02\x02\x02/0\x07*\x02\x020\x04\x03\x02\x02" +
		"\x0212\x07+\x02\x022\x06\x03\x02\x02\x0234\x07p\x02\x0245\x07q\x02\x02" +
		"56\x07p\x02\x0267\x07g\x02\x027\b\x03\x02\x02\x0289\x07u\x02\x029:\x07" +
		"g\x02\x02:;\x07g\x02\x02;<\x07\"\x02\x02<=\x07d\x02\x02=>\x07w\x02\x02" +
		">?\x07n\x02\x02?@\x07n\x02\x02@A\x07g\x02\x02AB\x07v\x02\x02BC\x07k\x02" +
		"\x02CD\x07p\x02\x02D\n\x03\x02\x02\x02EF\x07h\x02\x02FG\x07q\x02\x02G" +
		"H\x07t\x02\x02H\f\x03\x02\x02\x02IJ\x07p\x02\x02JK\x07q\x02\x02KL\x07" +
		"v\x02\x02LM\x07\"\x02\x02MN\x07h\x02\x02NO\x07q\x02\x02OP\x07t\x02\x02" +
		"P\x0E\x03\x02\x02\x02QR\x07u\x02\x02RS\x07v\x02\x02ST\x07w\x02\x02TU\x07" +
		"f\x02\x02UV\x07g\x02\x02VW\x07p\x02\x02WX\x07v\x02\x02XY\x07u\x02\x02" +
		"Y\x10\x03\x02\x02\x02Z[\x07u\x02\x02[\\\x07v\x02\x02\\]\x07w\x02\x02]" +
		"^\x07f\x02\x02^_\x07g\x02\x02_`\x07p\x02\x02`a\x07v\x02\x02ab\x07u\x02" +
		"\x02bc\x07\"\x02\x02cd\x07k\x02\x02de\x07p\x02\x02e\x12\x03\x02\x02\x02" +
		"fg\x07i\x02\x02gh\x07t\x02\x02hi\x07q\x02\x02ij\x07w\x02\x02jk\x07r\x02" +
		"\x02k\x14\x03\x02\x02\x02lm\x07o\x02\x02mn\x07c\x02\x02no\x07l\x02\x02" +
		"op\x07q\x02\x02pq\x07t\x02\x02q\x16\x03\x02\x02\x02rs\x07u\x02\x02st\x07" +
		"w\x02\x02tu\x07d\x02\x02uv\x07/\x02\x02vw\x07o\x02\x02wx\x07c\x02\x02" +
		"xy\x07l\x02\x02yz\x07q\x02\x02z{\x07t\x02\x02{\x18\x03\x02\x02\x02|}\x07" +
		"e\x02\x02}~\x07q\x02\x02~\x7F\x07p\x02\x02\x7F\x80\x07e\x02\x02\x80\x81" +
		"\x07w\x02\x02\x81\x82\x07t\x02\x02\x82\x83\x07t\x02\x02\x83\x84\x07g\x02" +
		"\x02\x84\x85\x07p\x02\x02\x85\x86\x07v\x02\x02\x86\x87\x07\"\x02\x02\x87" +
		"\x88\x07v\x02\x02\x88\x89\x07q\x02\x02\x89\x1A\x03\x02\x02\x02\x8A\x8B" +
		"\x07{\x02\x02\x8B\x8C\x07g\x02\x02\x8C\x8D\x07c\x02\x02\x8D\x8E\x07t\x02" +
		"\x02\x8E\x8F\x07\"\x02\x02\x8F\x90\x07u\x02\x02\x90\x91\x07v\x02\x02\x91" +
		"\x92\x07c\x02\x02\x92\x93\x07p\x02\x02\x93\x94\x07f\x02\x02\x94\x95\x07" +
		"k\x02\x02\x95\x96\x07p\x02\x02\x96\x97\x07i\x02\x02\x97\x1C\x03\x02\x02" +
		"\x02\x98\x99\x07c\x02\x02\x99\x9A\x07v\x02\x02\x9A\x9B\x07\"\x02\x02\x9B" +
		"\x9C\x07n\x02\x02\x9C\x9D\x07g\x02\x02\x9D\x9E\x07c\x02\x02\x9E\x9F\x07" +
		"u\x02\x02\x9F\xA0\x07v\x02\x02\xA0\x1E\x03\x02\x02\x02\xA1\xA2\x07e\x02" +
		"\x02\xA2\xA3\x07q\x02\x02\xA3\xA4\x07p\x02\x02\xA4\xA5\x07u\x02\x02\xA5" +
		"\xA6\x07g\x02\x02\xA6\xA7\x07p\x02\x02\xA7\xA8\x07v\x02\x02\xA8\xA9\x07" +
		"\"\x02\x02\xA9\xAA\x07q\x02\x02\xAA\xAB\x07h\x02\x02\xAB\xAC\x07\"\x02" +
		"\x02\xAC\xAD\x07v\x02\x02\xAD\xAE\x07j\x02\x02\xAE\xAF\x07g\x02\x02\xAF" +
		" \x03\x02\x02\x02\xB0\xB1\x07f\x02\x02\xB1\xB2\x07g\x02\x02\xB2\xB3\x07" +
		"r\x02\x02\xB3\xB4\x07c\x02\x02\xB4\xB5\x07t\x02\x02\xB5\xB6\x07v\x02\x02" +
		"\xB6\xB7\x07o\x02\x02\xB7\xB8\x07g\x02\x02\xB8\xB9\x07p\x02\x02\xB9\xE5" +
		"\x07v\x02\x02\xBA\xBB\x07k\x02\x02\xBB\xBC\x07p\x02\x02\xBC\xBD\x07u\x02" +
		"\x02\xBD\xBE\x07v\x02\x02\xBE\xBF\x07t\x02\x02\xBF\xC0\x07w\x02\x02\xC0" +
		"\xC1\x07e\x02\x02\xC1\xC2\x07v\x02\x02\xC2\xC3\x07q\x02\x02\xC3\xE5\x07" +
		"t\x02\x02\xC4\xC5\x07h\x02\x02\xC5\xC6\x07c\x02\x02\xC6\xC7\x07e\x02\x02" +
		"\xC7\xC8\x07w\x02\x02\xC8\xC9\x07n\x02\x02\xC9\xCA\x07v\x02\x02\xCA\xE5" +
		"\x07{\x02\x02\xCB\xCC\x07c\x02\x02\xCC\xCD\x07f\x02\x02\xCD\xCE\x07x\x02" +
		"\x02\xCE\xCF\x07k\x02\x02\xCF\xD0\x07u\x02\x02\xD0\xD1\x07q\x02\x02\xD1" +
		"\xE5\x07t\x02\x02\xD2\xD3\x07c\x02\x02\xD3\xD4\x07e\x02\x02\xD4\xD5\x07" +
		"c\x02\x02\xD5\xD6\x07f\x02\x02\xD6\xD7\x07g\x02\x02\xD7\xD8\x07o\x02\x02" +
		"\xD8\xD9\x07k\x02\x02\xD9\xDA\x07e\x02\x02\xDA\xDB\x07\"\x02\x02\xDB\xDC" +
		"\x07e\x02\x02\xDC\xDD\x07q\x02\x02\xDD\xDE\x07o\x02\x02\xDE\xDF\x07o\x02" +
		"\x02\xDF\xE0\x07k\x02\x02\xE0\xE1\x07v\x02\x02\xE1\xE2\x07v\x02\x02\xE2" +
		"\xE3\x07g\x02\x02\xE3\xE5\x07g\x02\x02\xE4\xB0\x03\x02\x02\x02\xE4\xBA" +
		"\x03\x02\x02\x02\xE4\xC4\x03\x02\x02\x02\xE4\xCB\x03\x02\x02\x02\xE4\xD2" +
		"\x03\x02\x02\x02\xE5\"\x03\x02\x02\x02\xE6\xE7\x07h\x02\x02\xE7\xE8\x07" +
		"k\x02\x02\xE8\xE9\x07t\x02\x02\xE9\xEA\x07u\x02\x02\xEA\u0107\x07v\x02" +
		"\x02\xEB\xEC\x07u\x02\x02\xEC\xED\x07g\x02\x02\xED\xEE\x07e\x02\x02\xEE" +
		"\xEF\x07q\x02\x02\xEF\xF0\x07p\x02\x02\xF0\u0107\x07f\x02\x02\xF1\xF2" +
		"\x07v\x02\x02\xF2\xF3\x07j\x02\x02\xF3\xF4\x07k\x02\x02\xF4\xF5\x07t\x02" +
		"\x02\xF5\u0107\x07f\x02\x02\xF6\xF7\x07h\x02\x02\xF7\xF8\x07q\x02\x02" +
		"\xF8\xF9\x07w\x02\x02\xF9\xFA\x07t\x02\x02\xFA\xFB\x07v\x02\x02\xFB\u0107" +
		"\x07j\x02\x02\xFC\xFD\x07h\x02\x02\xFD\xFE\x07k\x02\x02\xFE\xFF\x07h\x02" +
		"\x02\xFF\u0100\x07v\x02\x02\u0100\u0107\x07j\x02\x02\u0101\u0102\x07u" +
		"\x02\x02\u0102\u0103\x07k\x02\x02\u0103\u0104\x07z\x02\x02\u0104\u0105" +
		"\x07v\x02\x02\u0105\u0107\x07j\x02\x02\u0106\xE6\x03\x02\x02\x02\u0106" +
		"\xEB\x03\x02\x02\x02\u0106\xF1\x03\x02\x02\x02\u0106\xF6\x03\x02\x02\x02" +
		"\u0106\xFC\x03\x02\x02\x02\u0106\u0101\x03\x02\x02\x02\u0107$\x03\x02" +
		"\x02\x02\u0108\u0109\t\x02\x02\x02\u0109\u010A\t\x02\x02\x02\u010A\u010B" +
		"\t\x02\x02\x02\u010B\u010C\t\x02\x02\x02\u010C\u010D\t\x02\x02\x02\u010D" +
		"\u010E\t\x02\x02\x02\u010E&\x03\x02\x02\x02\u010F\u0110\x07c\x02\x02\u0110" +
		"\u0111\x07p\x02\x02\u0111\u0112\x07f\x02\x02\u0112(\x03\x02\x02\x02\u0113" +
		"\u0114\x07q\x02\x02\u0114\u0115\x07t\x02\x02\u0115*\x03\x02\x02\x02\u0116" +
		"\u0118\t\x03\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02" +
		"\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A,\x03" +
		"\x02\x02\x02\u011B\u011C\t\x04\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D" +
		"\u011E\b\x17\x02\x02\u011E.\x03\x02\x02\x02\x06\x02\xE4\u0106\u0119\x03" +
		"\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RegConditionLexer.__ATN) {
			RegConditionLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RegConditionLexer._serializedATN));
		}

		return RegConditionLexer.__ATN;
	}

}

