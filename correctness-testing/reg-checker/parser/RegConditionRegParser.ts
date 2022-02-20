// Generated from reg-checker/RegConditionReg.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { RegConditionRegListener } from "./RegConditionRegListener";
import { RegConditionRegVisitor } from "./RegConditionRegVisitor";


export class RegConditionRegParser extends Parser {
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
	public static readonly RULE_condition = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_atomic = 2;
	public static readonly RULE_concurrence = 3;
	public static readonly RULE_req_year = 4;
	public static readonly RULE_consent = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"condition", "expr", "atomic", "concurrence", "req_year", "consent",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RegConditionRegParser._LITERAL_NAMES, RegConditionRegParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RegConditionRegParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RegConditionReg.g4"; }

	// @Override
	public get ruleNames(): string[] { return RegConditionRegParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RegConditionRegParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RegConditionRegParser._ATN, this);
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RegConditionRegParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 12;
			this.expr(0);
			this.state = 13;
			this.match(RegConditionRegParser.EOF);
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
		this.enterRecursionRule(_localctx, 2, RegConditionRegParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RegConditionRegParser.T__0:
				{
				_localctx = new ExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 16;
				this.match(RegConditionRegParser.T__0);
				this.state = 17;
				this.expr(0);
				this.state = 18;
				this.match(RegConditionRegParser.T__1);
				}
				break;
			case RegConditionRegParser.T__3:
			case RegConditionRegParser.T__4:
			case RegConditionRegParser.T__5:
			case RegConditionRegParser.T__6:
			case RegConditionRegParser.T__7:
			case RegConditionRegParser.T__8:
			case RegConditionRegParser.YEAR:
			case RegConditionRegParser.COURSE_NUM:
				{
				_localctx = new AtomicExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 20;
				this.atomic();
				}
				break;
			case RegConditionRegParser.T__2:
				{
				_localctx = new NotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 21;
				this.match(RegConditionRegParser.T__2);
				this.state = 22;
				this.expr(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 33;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 31;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						_localctx = new AndContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RegConditionRegParser.RULE_expr);
						this.state = 25;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 26;
						this.match(RegConditionRegParser.AND);
						this.state = 27;
						this.expr(4);
						}
						break;

					case 2:
						{
						_localctx = new OrContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RegConditionRegParser.RULE_expr);
						this.state = 28;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 29;
						this.match(RegConditionRegParser.OR);
						this.state = 30;
						this.expr(3);
						}
						break;
					}
					}
				}
				this.state = 35;
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
		this.enterRule(_localctx, 4, RegConditionRegParser.RULE_atomic);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RegConditionRegParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 36;
				this.match(RegConditionRegParser.T__3);
				}
				break;
			case RegConditionRegParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 37;
				this.concurrence();
				}
				break;
			case RegConditionRegParser.COURSE_NUM:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 38;
				this.match(RegConditionRegParser.COURSE_NUM);
				}
				break;
			case RegConditionRegParser.YEAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 39;
				this.req_year();
				}
				break;
			case RegConditionRegParser.T__8:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 40;
				this.consent();
				}
				break;
			case RegConditionRegParser.T__4:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 41;
				this.match(RegConditionRegParser.T__4);
				this.state = 42;
				this.match(RegConditionRegParser.EQ);
				this.state = 43;
				this.match(RegConditionRegParser.FIELD_NUM);
				}
				break;
			case RegConditionRegParser.T__5:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 44;
				this.match(RegConditionRegParser.T__5);
				this.state = 45;
				this.match(RegConditionRegParser.EQ);
				this.state = 46;
				this.match(RegConditionRegParser.FIELD_NUM);
				}
				break;
			case RegConditionRegParser.T__6:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 47;
				this.match(RegConditionRegParser.T__6);
				this.state = 48;
				this.match(RegConditionRegParser.EQ);
				this.state = 49;
				this.match(RegConditionRegParser.LEVEL_NUM);
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
	public concurrence(): ConcurrenceContext {
		let _localctx: ConcurrenceContext = new ConcurrenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RegConditionRegParser.RULE_concurrence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(RegConditionRegParser.T__7);
			this.state = 53;
			this.match(RegConditionRegParser.COURSE_NUM);
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
		this.enterRule(_localctx, 8, RegConditionRegParser.RULE_req_year);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.match(RegConditionRegParser.YEAR);
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
		this.enterRule(_localctx, 10, RegConditionRegParser.RULE_consent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(RegConditionRegParser.T__8);
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
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14>\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\x1A\n\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03\"\n\x03\f\x03\x0E\x03%\v\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x045\n\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x02\x02\x03\x04\b\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x02\x02\x02B\x02\x0E\x03\x02\x02\x02\x04\x19" +
		"\x03\x02\x02\x02\x064\x03\x02\x02\x02\b6\x03\x02\x02\x02\n9\x03\x02\x02" +
		"\x02\f;\x03\x02\x02\x02\x0E\x0F\x05\x04\x03\x02\x0F\x10\x07\x02\x02\x03" +
		"\x10\x03\x03\x02\x02\x02\x11\x12\b\x03\x01\x02\x12\x13\x07\x03\x02\x02" +
		"\x13\x14\x05\x04\x03\x02\x14\x15\x07\x04\x02\x02\x15\x1A\x03\x02\x02\x02" +
		"\x16\x1A\x05\x06\x04\x02\x17\x18\x07\x05\x02\x02\x18\x1A\x05\x04\x03\x03" +
		"\x19\x11\x03\x02\x02\x02\x19\x16\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02" +
		"\x1A#\x03\x02\x02\x02\x1B\x1C\f\x05\x02\x02\x1C\x1D\x07\x10\x02\x02\x1D" +
		"\"\x05\x04\x03\x06\x1E\x1F\f\x04\x02\x02\x1F \x07\x11\x02\x02 \"\x05\x04" +
		"\x03\x05!\x1B\x03\x02\x02\x02!\x1E\x03\x02\x02\x02\"%\x03\x02\x02\x02" +
		"#!\x03\x02\x02\x02#$\x03\x02\x02\x02$\x05\x03\x02\x02\x02%#\x03\x02\x02" +
		"\x02&5\x07\x06\x02\x02\'5\x05\b\x05\x02(5\x07\r\x02\x02)5\x05\n\x06\x02" +
		"*5\x05\f\x07\x02+,\x07\x07\x02\x02,-\x07\x13\x02\x02-5\x07\x0E\x02\x02" +
		"./\x07\b\x02\x02/0\x07\x13\x02\x0205\x07\x0E\x02\x0212\x07\t\x02\x022" +
		"3\x07\x13\x02\x0235\x07\x0F\x02\x024&\x03\x02\x02\x024\'\x03\x02\x02\x02" +
		"4(\x03\x02\x02\x024)\x03\x02\x02\x024*\x03\x02\x02\x024+\x03\x02\x02\x02" +
		"4.\x03\x02\x02\x0241\x03\x02\x02\x025\x07\x03\x02\x02\x0267\x07\n\x02" +
		"\x0278\x07\r\x02\x028\t\x03\x02\x02\x029:\x07\f\x02\x02:\v\x03\x02\x02" +
		"\x02;<\x07\v\x02\x02<\r\x03\x02\x02\x02\x06\x19!#4";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RegConditionRegParser.__ATN) {
			RegConditionRegParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RegConditionRegParser._serializedATN));
		}

		return RegConditionRegParser.__ATN;
	}

}

export class ConditionContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public EOF(): TerminalNode { return this.getToken(RegConditionRegParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionRegParser.RULE_condition; }
	// @Override
	public enterRule(listener: RegConditionRegListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionRegListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionRegVisitor<Result>): Result {
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
	public get ruleIndex(): number { return RegConditionRegParser.RULE_expr; }
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
	public enterRule(listener: RegConditionRegListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionRegListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionRegVisitor<Result>): Result {
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
	public enterRule(listener: RegConditionRegListener): void {
		if (listener.enterAtomicExpression) {
			listener.enterAtomicExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionRegListener): void {
		if (listener.exitAtomicExpression) {
			listener.exitAtomicExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionRegVisitor<Result>): Result {
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
	public AND(): TerminalNode { return this.getToken(RegConditionRegParser.AND, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RegConditionRegListener): void {
		if (listener.enterAnd) {
			listener.enterAnd(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionRegListener): void {
		if (listener.exitAnd) {
			listener.exitAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionRegVisitor<Result>): Result {
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
	public OR(): TerminalNode { return this.getToken(RegConditionRegParser.OR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RegConditionRegListener): void {
		if (listener.enterOr) {
			listener.enterOr(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionRegListener): void {
		if (listener.exitOr) {
			listener.exitOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionRegVisitor<Result>): Result {
		if (visitor.visitOr) {
			return visitor.visitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RegConditionRegListener): void {
		if (listener.enterNot) {
			listener.enterNot(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionRegListener): void {
		if (listener.exitNot) {
			listener.exitNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionRegVisitor<Result>): Result {
		if (visitor.visitNot) {
			return visitor.visitNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomicContext extends ParserRuleContext {
	public concurrence(): ConcurrenceContext | undefined {
		return this.tryGetRuleContext(0, ConcurrenceContext);
	}
	public COURSE_NUM(): TerminalNode | undefined { return this.tryGetToken(RegConditionRegParser.COURSE_NUM, 0); }
	public req_year(): Req_yearContext | undefined {
		return this.tryGetRuleContext(0, Req_yearContext);
	}
	public consent(): ConsentContext | undefined {
		return this.tryGetRuleContext(0, ConsentContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(RegConditionRegParser.EQ, 0); }
	public FIELD_NUM(): TerminalNode | undefined { return this.tryGetToken(RegConditionRegParser.FIELD_NUM, 0); }
	public LEVEL_NUM(): TerminalNode | undefined { return this.tryGetToken(RegConditionRegParser.LEVEL_NUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionRegParser.RULE_atomic; }
	// @Override
	public enterRule(listener: RegConditionRegListener): void {
		if (listener.enterAtomic) {
			listener.enterAtomic(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionRegListener): void {
		if (listener.exitAtomic) {
			listener.exitAtomic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionRegVisitor<Result>): Result {
		if (visitor.visitAtomic) {
			return visitor.visitAtomic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConcurrenceContext extends ParserRuleContext {
	public COURSE_NUM(): TerminalNode { return this.getToken(RegConditionRegParser.COURSE_NUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionRegParser.RULE_concurrence; }
	// @Override
	public enterRule(listener: RegConditionRegListener): void {
		if (listener.enterConcurrence) {
			listener.enterConcurrence(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionRegListener): void {
		if (listener.exitConcurrence) {
			listener.exitConcurrence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionRegVisitor<Result>): Result {
		if (visitor.visitConcurrence) {
			return visitor.visitConcurrence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Req_yearContext extends ParserRuleContext {
	public YEAR(): TerminalNode { return this.getToken(RegConditionRegParser.YEAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionRegParser.RULE_req_year; }
	// @Override
	public enterRule(listener: RegConditionRegListener): void {
		if (listener.enterReq_year) {
			listener.enterReq_year(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionRegListener): void {
		if (listener.exitReq_year) {
			listener.exitReq_year(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionRegVisitor<Result>): Result {
		if (visitor.visitReq_year) {
			return visitor.visitReq_year(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConsentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegConditionRegParser.RULE_consent; }
	// @Override
	public enterRule(listener: RegConditionRegListener): void {
		if (listener.enterConsent) {
			listener.enterConsent(this);
		}
	}
	// @Override
	public exitRule(listener: RegConditionRegListener): void {
		if (listener.exitConsent) {
			listener.exitConsent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RegConditionRegVisitor<Result>): Result {
		if (visitor.visitConsent) {
			return visitor.visitConsent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


