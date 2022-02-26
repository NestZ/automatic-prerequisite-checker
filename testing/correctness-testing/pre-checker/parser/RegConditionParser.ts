// Generated from pre-checker/RegCondition.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { RegConditionListener } from "./RegConditionListener";
import { RegConditionVisitor } from "./RegConditionVisitor";


export class RegConditionParser extends Parser {
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
	public static readonly CONSENT_OF = 15;
	public static readonly YEAR = 16;
	public static readonly COURSE_NUM = 17;
	public static readonly AND = 18;
	public static readonly OR = 19;
	public static readonly FIELD = 20;
	public static readonly WS = 21;
	public static readonly RULE_condition = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_atomic = 2;
	public static readonly RULE_req_student = 3;
	public static readonly RULE_req_fac = 4;
	public static readonly RULE_req_fac_group = 5;
	public static readonly RULE_req_major = 6;
	public static readonly RULE_concurrence = 7;
	public static readonly RULE_req_year = 8;
	public static readonly RULE_at_least_req_year = 9;
	public static readonly RULE_consent = 10;
	public static readonly RULE_field = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"condition", "expr", "atomic", "req_student", "req_fac", "req_fac_group", 
		"req_major", "concurrence", "req_year", "at_least_req_year", "consent", 
		"field",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'none'", "'for'", "'not for'", "'students'", 
		"'students in'", "'group'", "'major'", "'sub-major'", "'concurrent to'", 
		"'year standing'", "'at least'", "'consent of the'", undefined, undefined, 
		undefined, "'and'", "'or'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "CONSENT_OF", "YEAR", "COURSE_NUM", "AND", "OR", "FIELD", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RegConditionParser._LITERAL_NAMES, RegConditionParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RegConditionParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RegCondition.g4"; }

	// @Override
	public get ruleNames(): string[] { return RegConditionParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RegConditionParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RegConditionParser._ATN, this);
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RegConditionParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.expr(0);
			this.state = 25;
			this.match(RegConditionParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, RegConditionParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RegConditionParser.T__0:
				{
				_localctx = new ExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 28;
				this.match(RegConditionParser.T__0);
				this.state = 29;
				this.expr(0);
				this.state = 30;
				this.match(RegConditionParser.T__1);
				}
				break;
			case RegConditionParser.T__2:
			case RegConditionParser.T__3:
			case RegConditionParser.T__4:
			case RegConditionParser.T__6:
			case RegConditionParser.T__10:
			case RegConditionParser.T__12:
			case RegConditionParser.T__13:
			case RegConditionParser.YEAR:
			case RegConditionParser.COURSE_NUM:
				{
				_localctx = new AtomicExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 32;
				this.atomic();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 43;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 41;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						_localctx = new AndContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RegConditionParser.RULE_expr);
						this.state = 35;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 36;
						this.match(RegConditionParser.AND);
						this.state = 37;
						this.expr(3);
						}
						break;

					case 2:
						{
						_localctx = new OrContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RegConditionParser.RULE_expr);
						this.state = 38;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 39;
						this.match(RegConditionParser.OR);
						this.state = 40;
						this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atomic(): AtomicContext {
		let _localctx: AtomicContext = new AtomicContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RegConditionParser.RULE_atomic);
		try {
			this.state = 54;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RegConditionParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 46;
				this.match(RegConditionParser.T__2);
				}
				break;
			case RegConditionParser.T__10:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 47;
				this.concurrence();
				}
				break;
			case RegConditionParser.COURSE_NUM:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 48;
				this.match(RegConditionParser.COURSE_NUM);
				}
				break;
			case RegConditionParser.YEAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 49;
				this.req_year();
				}
				break;
			case RegConditionParser.T__12:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 50;
				this.at_least_req_year();
				}
				break;
			case RegConditionParser.T__13:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 51;
				this.consent();
				}
				break;
			case RegConditionParser.T__3:
			case RegConditionParser.T__4:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 52;
				this.req_student();
				}
				break;
			case RegConditionParser.T__6:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 53;
				this.req_fac_group();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public req_student(): Req_studentContext {
		let _localctx: Req_studentContext = new Req_studentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RegConditionParser.RULE_req_student);
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RegConditionParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 56;
				this.match(RegConditionParser.T__3);
				this.state = 59;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RegConditionParser.AND:
				case RegConditionParser.OR:
				case RegConditionParser.FIELD:
					{
					this.state = 57;
					this.req_fac();
					}
					break;
				case RegConditionParser.T__6:
					{
					this.state = 58;
					this.req_fac_group();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RegConditionParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 61;
				this.match(RegConditionParser.T__4);
				this.state = 64;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RegConditionParser.AND:
				case RegConditionParser.OR:
				case RegConditionParser.FIELD:
					{
					this.state = 62;
					this.req_fac();
					}
					break;
				case RegConditionParser.T__6:
					{
					this.state = 63;
					this.req_fac_group();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public req_fac(): Req_facContext {
		let _localctx: Req_facContext = new Req_facContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RegConditionParser.RULE_req_fac);
		try {
			this.state = 75;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				_localctx = new ReqFacultyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.field();
				this.state = 69;
				this.match(RegConditionParser.T__5);
				}
				break;

			case 2:
				_localctx = new ReqFacultyAndMajorContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 71;
				this.field();
				this.state = 72;
				this.match(RegConditionParser.T__6);
				this.state = 73;
				this.req_major();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public req_fac_group(): Req_fac_groupContext {
		let _localctx: Req_fac_groupContext = new Req_fac_groupContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RegConditionParser.RULE_req_fac_group);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(RegConditionParser.T__6);
			this.state = 78;
			this.field();
			this.state = 79;
			this.match(RegConditionParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public req_major(): Req_majorContext {
		let _localctx: Req_majorContext = new Req_majorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RegConditionParser.RULE_req_major);
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				_localctx = new ReqMajorContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this.field();
				this.state = 82;
				this.match(RegConditionParser.T__8);
				}
				break;

			case 2:
				_localctx = new ReqSubMajorContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 84;
				this.field();
				this.state = 85;
				this.match(RegConditionParser.T__9);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public concurrence(): ConcurrenceContext {
		let _localctx: ConcurrenceContext = new ConcurrenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RegConditionParser.RULE_concurrence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.match(RegConditionParser.T__10);
			this.state = 90;
			this.match(RegConditionParser.COURSE_NUM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public req_year(): Req_yearContext {
		let _localctx: Req_yearContext = new Req_yearContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RegConditionParser.RULE_req_year);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(RegConditionParser.YEAR);
			this.state = 93;
			this.match(RegConditionParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public at_least_req_year(): At_least_req_yearContext {
		let _localctx: At_least_req_yearContext = new At_least_req_yearContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RegConditionParser.RULE_at_least_req_year);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.match(RegConditionParser.T__12);
			this.state = 96;
			this.req_year();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public consent(): ConsentContext {
		let _localctx: ConsentContext = new ConsentContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RegConditionParser.RULE_consent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(RegConditionParser.T__13);
			this.state = 99;
			this.match(RegConditionParser.CONSENT_OF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RegConditionParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 101;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RegConditionParser.AND) | (1 << RegConditionParser.OR) | (1 << RegConditionParser.FIELD))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RegConditionParser.AND) | (1 << RegConditionParser.OR) | (1 << RegConditionParser.FIELD))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17m\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03$\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03,\n" +
		"\x03\f\x03\x0E\x03/\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x049\n\x04\x03\x05\x03\x05\x03\x05\x05\x05>\n" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05C\n\x05\x05\x05E\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06N\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bZ\n\b\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\r\x06\ri\n\r\r\r\x0E\rj\x03\r\x02\x02\x03\x04\x0E\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x02\x03\x03\x02\x14\x16\x02p\x02\x1A\x03\x02\x02\x02\x04#\x03\x02\x02" +
		"\x02\x068\x03\x02\x02\x02\bD\x03\x02\x02\x02\nM\x03\x02\x02\x02\fO\x03" +
		"\x02\x02\x02\x0EY\x03\x02\x02\x02\x10[\x03\x02\x02\x02\x12^\x03\x02\x02" +
		"\x02\x14a\x03\x02\x02\x02\x16d\x03\x02\x02\x02\x18h\x03\x02\x02\x02\x1A" +
		"\x1B\x05\x04\x03\x02\x1B\x1C\x07\x02\x02\x03\x1C\x03\x03\x02\x02\x02\x1D" +
		"\x1E\b\x03\x01\x02\x1E\x1F\x07\x03\x02\x02\x1F \x05\x04\x03\x02 !\x07" +
		"\x04\x02\x02!$\x03\x02\x02\x02\"$\x05\x06\x04\x02#\x1D\x03\x02\x02\x02" +
		"#\"\x03\x02\x02\x02$-\x03\x02\x02\x02%&\f\x04\x02\x02&\'\x07\x14\x02\x02" +
		"\',\x05\x04\x03\x05()\f\x03\x02\x02)*\x07\x15\x02\x02*,\x05\x04\x03\x04" +
		"+%\x03\x02\x02\x02+(\x03\x02\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02" +
		"-.\x03\x02\x02\x02.\x05\x03\x02\x02\x02/-\x03\x02\x02\x0209\x07\x05\x02" +
		"\x0219\x05\x10\t\x0229\x07\x13\x02\x0239\x05\x12\n\x0249\x05\x14\v\x02" +
		"59\x05\x16\f\x0269\x05\b\x05\x0279\x05\f\x07\x0280\x03\x02\x02\x0281\x03" +
		"\x02\x02\x0282\x03\x02\x02\x0283\x03\x02\x02\x0284\x03\x02\x02\x0285\x03" +
		"\x02\x02\x0286\x03\x02\x02\x0287\x03\x02\x02\x029\x07\x03\x02\x02\x02" +
		":=\x07\x06\x02\x02;>\x05\n\x06\x02<>\x05\f\x07\x02=;\x03\x02\x02\x02=" +
		"<\x03\x02\x02\x02>E\x03\x02\x02\x02?B\x07\x07\x02\x02@C\x05\n\x06\x02" +
		"AC\x05\f\x07\x02B@\x03\x02\x02\x02BA\x03\x02\x02\x02CE\x03\x02\x02\x02" +
		"D:\x03\x02\x02\x02D?\x03\x02\x02\x02E\t\x03\x02\x02\x02FG\x05\x18\r\x02" +
		"GH\x07\b\x02\x02HN\x03\x02\x02\x02IJ\x05\x18\r\x02JK\x07\t\x02\x02KL\x05" +
		"\x0E\b\x02LN\x03\x02\x02\x02MF\x03\x02\x02\x02MI\x03\x02\x02\x02N\v\x03" +
		"\x02\x02\x02OP\x07\t\x02\x02PQ\x05\x18\r\x02QR\x07\n\x02\x02R\r\x03\x02" +
		"\x02\x02ST\x05\x18\r\x02TU\x07\v\x02\x02UZ\x03\x02\x02\x02VW\x05\x18\r" +
		"\x02WX\x07\f\x02\x02XZ\x03\x02\x02\x02YS\x03\x02\x02\x02YV\x03\x02\x02" +
		"\x02Z\x0F\x03\x02\x02\x02[\\\x07\r\x02\x02\\]\x07\x13\x02\x02]\x11\x03" +
		"\x02\x02\x02^_\x07\x12\x02\x02_`\x07\x0E\x02\x02`\x13\x03\x02\x02\x02" +
		"ab\x07\x0F\x02\x02bc\x05\x12\n\x02c\x15\x03\x02\x02\x02de\x07\x10\x02" +
		"\x02ef\x07\x11\x02\x02f\x17\x03\x02\x02\x02gi\t\x02\x02\x02hg\x03\x02" +
		"\x02\x02ij\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02k\x19\x03" +
		"\x02\x02\x02\f#+-8=BDMYj";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RegConditionParser.__ATN) {
			RegConditionParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RegConditionParser._serializedATN));
		}

		return RegConditionParser.__ATN;
	}

}

export class ConditionContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public EOF(): TerminalNode { return this.getToken(RegConditionParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionParser.RULE_condition; }
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpressionContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtomicExpressionContext extends ExprContext {
	public atomic(): AtomicContext {
		return this.getRuleContext(0, AtomicContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterAtomicExpression) {
			listener.enterAtomicExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitAtomicExpression) {
			listener.exitAtomicExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitAtomicExpression) {
			return visitor.visitAtomicExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(RegConditionParser.AND, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterAnd) {
			listener.enterAnd(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitAnd) {
			listener.exitAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitAnd) {
			return visitor.visitAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(RegConditionParser.OR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterOr) {
			listener.enterOr(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitOr) {
			listener.exitOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitOr) {
			return visitor.visitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomicContext extends ParserRuleContext {
	public concurrence(): ConcurrenceContext | undefined {
		return this.tryGetRuleContext(0, ConcurrenceContext);
	}
	public COURSE_NUM(): TerminalNode | undefined { return this.tryGetToken(RegConditionParser.COURSE_NUM, 0); }
	public req_year(): Req_yearContext | undefined {
		return this.tryGetRuleContext(0, Req_yearContext);
	}
	public at_least_req_year(): At_least_req_yearContext | undefined {
		return this.tryGetRuleContext(0, At_least_req_yearContext);
	}
	public consent(): ConsentContext | undefined {
		return this.tryGetRuleContext(0, ConsentContext);
	}
	public req_student(): Req_studentContext | undefined {
		return this.tryGetRuleContext(0, Req_studentContext);
	}
	public req_fac_group(): Req_fac_groupContext | undefined {
		return this.tryGetRuleContext(0, Req_fac_groupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionParser.RULE_atomic; }
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterAtomic) {
			listener.enterAtomic(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitAtomic) {
			listener.exitAtomic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitAtomic) {
			return visitor.visitAtomic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Req_studentContext extends ParserRuleContext {
	public req_fac(): Req_facContext | undefined {
		return this.tryGetRuleContext(0, Req_facContext);
	}
	public req_fac_group(): Req_fac_groupContext | undefined {
		return this.tryGetRuleContext(0, Req_fac_groupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionParser.RULE_req_student; }
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterReq_student) {
			listener.enterReq_student(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitReq_student) {
			listener.exitReq_student(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitReq_student) {
			return visitor.visitReq_student(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Req_facContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionParser.RULE_req_fac; }
	public copyFrom(ctx: Req_facContext): void {
		super.copyFrom(ctx);
	}
}
export class ReqFacultyContext extends Req_facContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	constructor(ctx: Req_facContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterReqFaculty) {
			listener.enterReqFaculty(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitReqFaculty) {
			listener.exitReqFaculty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitReqFaculty) {
			return visitor.visitReqFaculty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReqFacultyAndMajorContext extends Req_facContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public req_major(): Req_majorContext {
		return this.getRuleContext(0, Req_majorContext);
	}
	constructor(ctx: Req_facContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterReqFacultyAndMajor) {
			listener.enterReqFacultyAndMajor(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitReqFacultyAndMajor) {
			listener.exitReqFacultyAndMajor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitReqFacultyAndMajor) {
			return visitor.visitReqFacultyAndMajor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Req_fac_groupContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionParser.RULE_req_fac_group; }
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterReq_fac_group) {
			listener.enterReq_fac_group(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitReq_fac_group) {
			listener.exitReq_fac_group(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitReq_fac_group) {
			return visitor.visitReq_fac_group(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Req_majorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionParser.RULE_req_major; }
	public copyFrom(ctx: Req_majorContext): void {
		super.copyFrom(ctx);
	}
}
export class ReqMajorContext extends Req_majorContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	constructor(ctx: Req_majorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterReqMajor) {
			listener.enterReqMajor(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitReqMajor) {
			listener.exitReqMajor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitReqMajor) {
			return visitor.visitReqMajor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReqSubMajorContext extends Req_majorContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	constructor(ctx: Req_majorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterReqSubMajor) {
			listener.enterReqSubMajor(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitReqSubMajor) {
			listener.exitReqSubMajor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitReqSubMajor) {
			return visitor.visitReqSubMajor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConcurrenceContext extends ParserRuleContext {
	public COURSE_NUM(): TerminalNode { return this.getToken(RegConditionParser.COURSE_NUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionParser.RULE_concurrence; }
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterConcurrence) {
			listener.enterConcurrence(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitConcurrence) {
			listener.exitConcurrence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitConcurrence) {
			return visitor.visitConcurrence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Req_yearContext extends ParserRuleContext {
	public YEAR(): TerminalNode { return this.getToken(RegConditionParser.YEAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionParser.RULE_req_year; }
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterReq_year) {
			listener.enterReq_year(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitReq_year) {
			listener.exitReq_year(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitReq_year) {
			return visitor.visitReq_year(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class At_least_req_yearContext extends ParserRuleContext {
	public req_year(): Req_yearContext {
		return this.getRuleContext(0, Req_yearContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionParser.RULE_at_least_req_year; }
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterAt_least_req_year) {
			listener.enterAt_least_req_year(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitAt_least_req_year) {
			listener.exitAt_least_req_year(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitAt_least_req_year) {
			return visitor.visitAt_least_req_year(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConsentContext extends ParserRuleContext {
	public CONSENT_OF(): TerminalNode { return this.getToken(RegConditionParser.CONSENT_OF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionParser.RULE_consent; }
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterConsent) {
			listener.enterConsent(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitConsent) {
			listener.exitConsent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitConsent) {
			return visitor.visitConsent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public FIELD(): TerminalNode[];
	public FIELD(i: number): TerminalNode;
	public FIELD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegConditionParser.FIELD);
		} else {
			return this.getToken(RegConditionParser.FIELD, i);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegConditionParser.AND);
		} else {
			return this.getToken(RegConditionParser.AND, i);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegConditionParser.OR);
		} else {
			return this.getToken(RegConditionParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionParser.RULE_field; }
	// @Override
	public enterRule(listener: RegConditionListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


