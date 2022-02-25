// Generated from reg-checker/RegConditionReg.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExpressionContext } from "./RegConditionRegParser";
import { AtomicExpressionContext } from "./RegConditionRegParser";
import { NotContext } from "./RegConditionRegParser";
import { AndContext } from "./RegConditionRegParser";
import { OrContext } from "./RegConditionRegParser";
import { ConditionContext } from "./RegConditionRegParser";
import { ExprContext } from "./RegConditionRegParser";
import { AtomicContext } from "./RegConditionRegParser";
import { ConcurrenceContext } from "./RegConditionRegParser";
import { Req_yearContext } from "./RegConditionRegParser";
import { ConsentContext } from "./RegConditionRegParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RegConditionRegParser`.
 */
export interface RegConditionRegListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Expression`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `Expression`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AtomicExpression`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAtomicExpression?: (ctx: AtomicExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AtomicExpression`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAtomicExpression?: (ctx: AtomicExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `Not`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNot?: (ctx: NotContext) => void;
	/**
	 * Exit a parse tree produced by the `Not`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNot?: (ctx: NotContext) => void;

	/**
	 * Enter a parse tree produced by the `And`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAnd?: (ctx: AndContext) => void;
	/**
	 * Exit a parse tree produced by the `And`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAnd?: (ctx: AndContext) => void;

	/**
	 * Enter a parse tree produced by the `Or`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 */
	enterOr?: (ctx: OrContext) => void;
	/**
	 * Exit a parse tree produced by the `Or`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 */
	exitOr?: (ctx: OrContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionRegParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionRegParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionRegParser.atomic`.
	 * @param ctx the parse tree
	 */
	enterAtomic?: (ctx: AtomicContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionRegParser.atomic`.
	 * @param ctx the parse tree
	 */
	exitAtomic?: (ctx: AtomicContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionRegParser.concurrence`.
	 * @param ctx the parse tree
	 */
	enterConcurrence?: (ctx: ConcurrenceContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionRegParser.concurrence`.
	 * @param ctx the parse tree
	 */
	exitConcurrence?: (ctx: ConcurrenceContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionRegParser.req_year`.
	 * @param ctx the parse tree
	 */
	enterReq_year?: (ctx: Req_yearContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionRegParser.req_year`.
	 * @param ctx the parse tree
	 */
	exitReq_year?: (ctx: Req_yearContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionRegParser.consent`.
	 * @param ctx the parse tree
	 */
	enterConsent?: (ctx: ConsentContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionRegParser.consent`.
	 * @param ctx the parse tree
	 */
	exitConsent?: (ctx: ConsentContext) => void;
}

