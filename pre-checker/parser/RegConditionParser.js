// Generated from RegCondition.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import RegConditionListener from './RegConditionListener.js';
import RegConditionVisitor from './RegConditionVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0018n\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003$\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0007\u0003,\n\u0003\f\u0003\u000e\u0003/\u000b\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004:\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005?\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005D\n\u0005\u0005\u0005F\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006O\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\b[\n\b\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0006\rj\n\r\r\r\u000e\rk\u0003\r\u0002\u0003\u0004",
    "\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002",
    "\u0003\u0003\u0002\u0015\u0017\u0002r\u0002\u001a\u0003\u0002\u0002",
    "\u0002\u0004#\u0003\u0002\u0002\u0002\u00069\u0003\u0002\u0002\u0002",
    "\bE\u0003\u0002\u0002\u0002\nN\u0003\u0002\u0002\u0002\fP\u0003\u0002",
    "\u0002\u0002\u000eZ\u0003\u0002\u0002\u0002\u0010\\\u0003\u0002\u0002",
    "\u0002\u0012_\u0003\u0002\u0002\u0002\u0014b\u0003\u0002\u0002\u0002",
    "\u0016e\u0003\u0002\u0002\u0002\u0018i\u0003\u0002\u0002\u0002\u001a",
    "\u001b\u0005\u0004\u0003\u0002\u001b\u001c\u0007\u0002\u0002\u0003\u001c",
    "\u0003\u0003\u0002\u0002\u0002\u001d\u001e\b\u0003\u0001\u0002\u001e",
    "\u001f\u0007\u0003\u0002\u0002\u001f \u0005\u0004\u0003\u0002 !\u0007",
    "\u0004\u0002\u0002!$\u0003\u0002\u0002\u0002\"$\u0005\u0006\u0004\u0002",
    "#\u001d\u0003\u0002\u0002\u0002#\"\u0003\u0002\u0002\u0002$-\u0003\u0002",
    "\u0002\u0002%&\f\u0004\u0002\u0002&\'\u0007\u0015\u0002\u0002\',\u0005",
    "\u0004\u0003\u0005()\f\u0003\u0002\u0002)*\u0007\u0016\u0002\u0002*",
    ",\u0005\u0004\u0003\u0004+%\u0003\u0002\u0002\u0002+(\u0003\u0002\u0002",
    "\u0002,/\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002",
    "\u0002\u0002.\u0005\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002",
    "0:\u0007\u0005\u0002\u00021:\u0007\u0006\u0002\u00022:\u0005\u0010\t",
    "\u00023:\u0007\u0014\u0002\u00024:\u0005\u0012\n\u00025:\u0005\u0014",
    "\u000b\u00026:\u0005\u0016\f\u00027:\u0005\b\u0005\u00028:\u0005\f\u0007",
    "\u000290\u0003\u0002\u0002\u000291\u0003\u0002\u0002\u000292\u0003\u0002",
    "\u0002\u000293\u0003\u0002\u0002\u000294\u0003\u0002\u0002\u000295\u0003",
    "\u0002\u0002\u000296\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002",
    "98\u0003\u0002\u0002\u0002:\u0007\u0003\u0002\u0002\u0002;>\u0007\u0007",
    "\u0002\u0002<?\u0005\n\u0006\u0002=?\u0005\f\u0007\u0002><\u0003\u0002",
    "\u0002\u0002>=\u0003\u0002\u0002\u0002?F\u0003\u0002\u0002\u0002@C\u0007",
    "\b\u0002\u0002AD\u0005\n\u0006\u0002BD\u0005\f\u0007\u0002CA\u0003\u0002",
    "\u0002\u0002CB\u0003\u0002\u0002\u0002DF\u0003\u0002\u0002\u0002E;\u0003",
    "\u0002\u0002\u0002E@\u0003\u0002\u0002\u0002F\t\u0003\u0002\u0002\u0002",
    "GH\u0005\u0018\r\u0002HI\u0007\t\u0002\u0002IO\u0003\u0002\u0002\u0002",
    "JK\u0005\u0018\r\u0002KL\u0007\n\u0002\u0002LM\u0005\u000e\b\u0002M",
    "O\u0003\u0002\u0002\u0002NG\u0003\u0002\u0002\u0002NJ\u0003\u0002\u0002",
    "\u0002O\u000b\u0003\u0002\u0002\u0002PQ\u0007\n\u0002\u0002QR\u0005",
    "\u0018\r\u0002RS\u0007\u000b\u0002\u0002S\r\u0003\u0002\u0002\u0002",
    "TU\u0005\u0018\r\u0002UV\u0007\f\u0002\u0002V[\u0003\u0002\u0002\u0002",
    "WX\u0005\u0018\r\u0002XY\u0007\r\u0002\u0002Y[\u0003\u0002\u0002\u0002",
    "ZT\u0003\u0002\u0002\u0002ZW\u0003\u0002\u0002\u0002[\u000f\u0003\u0002",
    "\u0002\u0002\\]\u0007\u000e\u0002\u0002]^\u0007\u0014\u0002\u0002^\u0011",
    "\u0003\u0002\u0002\u0002_`\u0007\u0013\u0002\u0002`a\u0007\u000f\u0002",
    "\u0002a\u0013\u0003\u0002\u0002\u0002bc\u0007\u0010\u0002\u0002cd\u0005",
    "\u0012\n\u0002d\u0015\u0003\u0002\u0002\u0002ef\u0007\u0011\u0002\u0002",
    "fg\u0007\u0012\u0002\u0002g\u0017\u0003\u0002\u0002\u0002hj\t\u0002",
    "\u0002\u0002ih\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002ki\u0003",
    "\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002l\u0019\u0003\u0002\u0002",
    "\u0002\f#+-9>CENZk"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class RegConditionParser extends antlr4.Parser {

    static grammarFileName = "RegCondition.g4";
    static literalNames = [ null, "'('", "')'", "'none'", "'see bulletin'", 
                            "'for'", "'not for'", "'students'", "'students in'", 
                            "'group'", "'major'", "'sub-major'", "'concurrent to'", 
                            "'year standing'", "'at least'", "'consent of the'", 
                            null, null, null, "'and'", "'or'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "CONSENT_OF", "YEAR", "COURSE_NUM", "AND", 
                             "OR", "FIELD", "WS" ];
    static ruleNames = [ "condition", "expr", "atomic", "req_student", "req_fac", 
                         "req_fac_group", "req_major", "concurrence", "req_year", 
                         "at_least_req_year", "consent", "field" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RegConditionParser.ruleNames;
        this.literalNames = RegConditionParser.literalNames;
        this.symbolicNames = RegConditionParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RegConditionParser.RULE_condition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.expr(0);
	        this.state = 25;
	        this.match(RegConditionParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, RegConditionParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case RegConditionParser.T__0:
	            localctx = new ExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 28;
	            this.match(RegConditionParser.T__0);
	            this.state = 29;
	            this.expr(0);
	            this.state = 30;
	            this.match(RegConditionParser.T__1);
	            break;
	        case RegConditionParser.T__2:
	        case RegConditionParser.T__3:
	        case RegConditionParser.T__4:
	        case RegConditionParser.T__5:
	        case RegConditionParser.T__7:
	        case RegConditionParser.T__11:
	        case RegConditionParser.T__13:
	        case RegConditionParser.T__14:
	        case RegConditionParser.YEAR:
	        case RegConditionParser.COURSE_NUM:
	            localctx = new AtomicExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 32;
	            this.atomic();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 41;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AndContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RegConditionParser.RULE_expr);
	                    this.state = 35;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 36;
	                    this.match(RegConditionParser.AND);
	                    this.state = 37;
	                    this.expr(3);
	                    break;

	                case 2:
	                    localctx = new OrContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RegConditionParser.RULE_expr);
	                    this.state = 38;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 39;
	                    this.match(RegConditionParser.OR);
	                    this.state = 40;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 45;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	atomic() {
	    let localctx = new AtomicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RegConditionParser.RULE_atomic);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case RegConditionParser.T__2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.match(RegConditionParser.T__2);
	            break;
	        case RegConditionParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.match(RegConditionParser.T__3);
	            break;
	        case RegConditionParser.T__11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.concurrence();
	            break;
	        case RegConditionParser.COURSE_NUM:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 49;
	            this.match(RegConditionParser.COURSE_NUM);
	            break;
	        case RegConditionParser.YEAR:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 50;
	            this.req_year();
	            break;
	        case RegConditionParser.T__13:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 51;
	            this.at_least_req_year();
	            break;
	        case RegConditionParser.T__14:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 52;
	            this.consent();
	            break;
	        case RegConditionParser.T__4:
	        case RegConditionParser.T__5:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 53;
	            this.req_student();
	            break;
	        case RegConditionParser.T__7:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 54;
	            this.req_fac_group();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	req_student() {
	    let localctx = new Req_studentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RegConditionParser.RULE_req_student);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case RegConditionParser.T__4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.match(RegConditionParser.T__4);
	            this.state = 60;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case RegConditionParser.AND:
	            case RegConditionParser.OR:
	            case RegConditionParser.FIELD:
	                this.state = 58;
	                this.req_fac();
	                break;
	            case RegConditionParser.T__7:
	                this.state = 59;
	                this.req_fac_group();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        case RegConditionParser.T__5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.match(RegConditionParser.T__5);
	            this.state = 65;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case RegConditionParser.AND:
	            case RegConditionParser.OR:
	            case RegConditionParser.FIELD:
	                this.state = 63;
	                this.req_fac();
	                break;
	            case RegConditionParser.T__7:
	                this.state = 64;
	                this.req_fac_group();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	req_fac() {
	    let localctx = new Req_facContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RegConditionParser.RULE_req_fac);
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ReqFacultyContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.field();
	            this.state = 70;
	            this.match(RegConditionParser.T__6);
	            break;

	        case 2:
	            localctx = new ReqFacultyAndMajorContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.field();
	            this.state = 73;
	            this.match(RegConditionParser.T__7);
	            this.state = 74;
	            this.req_major();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	req_fac_group() {
	    let localctx = new Req_fac_groupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RegConditionParser.RULE_req_fac_group);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(RegConditionParser.T__7);
	        this.state = 79;
	        this.field();
	        this.state = 80;
	        this.match(RegConditionParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	req_major() {
	    let localctx = new Req_majorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RegConditionParser.RULE_req_major);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ReqMajorContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.field();
	            this.state = 83;
	            this.match(RegConditionParser.T__9);
	            break;

	        case 2:
	            localctx = new ReqSubMajorContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.field();
	            this.state = 86;
	            this.match(RegConditionParser.T__10);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concurrence() {
	    let localctx = new ConcurrenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RegConditionParser.RULE_concurrence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(RegConditionParser.T__11);
	        this.state = 91;
	        this.match(RegConditionParser.COURSE_NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	req_year() {
	    let localctx = new Req_yearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RegConditionParser.RULE_req_year);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(RegConditionParser.YEAR);
	        this.state = 94;
	        this.match(RegConditionParser.T__12);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	at_least_req_year() {
	    let localctx = new At_least_req_yearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, RegConditionParser.RULE_at_least_req_year);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(RegConditionParser.T__13);
	        this.state = 97;
	        this.req_year();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consent() {
	    let localctx = new ConsentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, RegConditionParser.RULE_consent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(RegConditionParser.T__14);
	        this.state = 100;
	        this.match(RegConditionParser.CONSENT_OF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, RegConditionParser.RULE_field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 102;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RegConditionParser.AND) | (1 << RegConditionParser.OR) | (1 << RegConditionParser.FIELD))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 105; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RegConditionParser.AND) | (1 << RegConditionParser.OR) | (1 << RegConditionParser.FIELD))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RegConditionParser.EOF = antlr4.Token.EOF;
RegConditionParser.T__0 = 1;
RegConditionParser.T__1 = 2;
RegConditionParser.T__2 = 3;
RegConditionParser.T__3 = 4;
RegConditionParser.T__4 = 5;
RegConditionParser.T__5 = 6;
RegConditionParser.T__6 = 7;
RegConditionParser.T__7 = 8;
RegConditionParser.T__8 = 9;
RegConditionParser.T__9 = 10;
RegConditionParser.T__10 = 11;
RegConditionParser.T__11 = 12;
RegConditionParser.T__12 = 13;
RegConditionParser.T__13 = 14;
RegConditionParser.T__14 = 15;
RegConditionParser.CONSENT_OF = 16;
RegConditionParser.YEAR = 17;
RegConditionParser.COURSE_NUM = 18;
RegConditionParser.AND = 19;
RegConditionParser.OR = 20;
RegConditionParser.FIELD = 21;
RegConditionParser.WS = 22;

RegConditionParser.RULE_condition = 0;
RegConditionParser.RULE_expr = 1;
RegConditionParser.RULE_atomic = 2;
RegConditionParser.RULE_req_student = 3;
RegConditionParser.RULE_req_fac = 4;
RegConditionParser.RULE_req_fac_group = 5;
RegConditionParser.RULE_req_major = 6;
RegConditionParser.RULE_concurrence = 7;
RegConditionParser.RULE_req_year = 8;
RegConditionParser.RULE_at_least_req_year = 9;
RegConditionParser.RULE_consent = 10;
RegConditionParser.RULE_field = 11;

class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegConditionParser.RULE_condition;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EOF() {
	    return this.getToken(RegConditionParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegConditionParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OrContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	OR() {
	    return this.getToken(RegConditionParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitOr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegConditionParser.OrContext = OrContext;

class ExpressionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegConditionParser.ExpressionContext = ExpressionContext;

class AtomicExpressionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	atomic() {
	    return this.getTypedRuleContext(AtomicContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterAtomicExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitAtomicExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitAtomicExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegConditionParser.AtomicExpressionContext = AtomicExpressionContext;

class AndContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	AND() {
	    return this.getToken(RegConditionParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitAnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegConditionParser.AndContext = AndContext;

class AtomicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegConditionParser.RULE_atomic;
    }

	concurrence() {
	    return this.getTypedRuleContext(ConcurrenceContext,0);
	};

	COURSE_NUM() {
	    return this.getToken(RegConditionParser.COURSE_NUM, 0);
	};

	req_year() {
	    return this.getTypedRuleContext(Req_yearContext,0);
	};

	at_least_req_year() {
	    return this.getTypedRuleContext(At_least_req_yearContext,0);
	};

	consent() {
	    return this.getTypedRuleContext(ConsentContext,0);
	};

	req_student() {
	    return this.getTypedRuleContext(Req_studentContext,0);
	};

	req_fac_group() {
	    return this.getTypedRuleContext(Req_fac_groupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterAtomic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitAtomic(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitAtomic(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Req_studentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegConditionParser.RULE_req_student;
    }

	req_fac() {
	    return this.getTypedRuleContext(Req_facContext,0);
	};

	req_fac_group() {
	    return this.getTypedRuleContext(Req_fac_groupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterReq_student(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitReq_student(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitReq_student(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Req_facContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegConditionParser.RULE_req_fac;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ReqFacultyAndMajorContext extends Req_facContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	req_major() {
	    return this.getTypedRuleContext(Req_majorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterReqFacultyAndMajor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitReqFacultyAndMajor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitReqFacultyAndMajor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegConditionParser.ReqFacultyAndMajorContext = ReqFacultyAndMajorContext;

class ReqFacultyContext extends Req_facContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterReqFaculty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitReqFaculty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitReqFaculty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegConditionParser.ReqFacultyContext = ReqFacultyContext;

class Req_fac_groupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegConditionParser.RULE_req_fac_group;
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterReq_fac_group(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitReq_fac_group(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitReq_fac_group(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Req_majorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegConditionParser.RULE_req_major;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ReqSubMajorContext extends Req_majorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterReqSubMajor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitReqSubMajor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitReqSubMajor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegConditionParser.ReqSubMajorContext = ReqSubMajorContext;

class ReqMajorContext extends Req_majorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterReqMajor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitReqMajor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitReqMajor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegConditionParser.ReqMajorContext = ReqMajorContext;

class ConcurrenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegConditionParser.RULE_concurrence;
    }

	COURSE_NUM() {
	    return this.getToken(RegConditionParser.COURSE_NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterConcurrence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitConcurrence(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitConcurrence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Req_yearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegConditionParser.RULE_req_year;
    }

	YEAR() {
	    return this.getToken(RegConditionParser.YEAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterReq_year(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitReq_year(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitReq_year(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class At_least_req_yearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegConditionParser.RULE_at_least_req_year;
    }

	req_year() {
	    return this.getTypedRuleContext(Req_yearContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterAt_least_req_year(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitAt_least_req_year(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitAt_least_req_year(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegConditionParser.RULE_consent;
    }

	CONSENT_OF() {
	    return this.getToken(RegConditionParser.CONSENT_OF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterConsent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitConsent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitConsent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegConditionParser.RULE_field;
    }

	FIELD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RegConditionParser.FIELD);
	    } else {
	        return this.getToken(RegConditionParser.FIELD, i);
	    }
	};


	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RegConditionParser.AND);
	    } else {
	        return this.getToken(RegConditionParser.AND, i);
	    }
	};


	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RegConditionParser.OR);
	    } else {
	        return this.getToken(RegConditionParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegConditionListener ) {
	        listener.exitField(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegConditionVisitor ) {
	        return visitor.visitField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RegConditionParser.ConditionContext = ConditionContext; 
RegConditionParser.ExprContext = ExprContext; 
RegConditionParser.AtomicContext = AtomicContext; 
RegConditionParser.Req_studentContext = Req_studentContext; 
RegConditionParser.Req_facContext = Req_facContext; 
RegConditionParser.Req_fac_groupContext = Req_fac_groupContext; 
RegConditionParser.Req_majorContext = Req_majorContext; 
RegConditionParser.ConcurrenceContext = ConcurrenceContext; 
RegConditionParser.Req_yearContext = Req_yearContext; 
RegConditionParser.At_least_req_yearContext = At_least_req_yearContext; 
RegConditionParser.ConsentContext = ConsentContext; 
RegConditionParser.FieldContext = FieldContext; 
