// Generated from reg-checker/RegConditionReg.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressionContext } from "./RegConditionRegParser";
import { AtomicExpressionContext } from "./RegConditionRegParser";
import { AndContext } from "./RegConditionRegParser";
import { OrContext } from "./RegConditionRegParser";
import { NotContext } from "./RegConditionRegParser";
import { ConditionContext } from "./RegConditionRegParser";
import { ExprContext } from "./RegConditionRegParser";
import { AtomicContext } from "./RegConditionRegParser";
import { ConcurrenceContext } from "./RegConditionRegParser";
import { Req_yearContext } from "./RegConditionRegParser";
import { ConsentContext } from "./RegConditionRegParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RegConditionRegParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RegConditionRegVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `Expression`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AtomicExpression`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomicExpression?: (ctx: AtomicExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `And`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd?: (ctx: AndContext) => Result;

	/**
	 * Visit a parse tree produced by the `Or`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr?: (ctx: OrContext) => Result;

	/**
	 * Visit a parse tree produced by the `Not`
	 * labeled alternative in `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot?: (ctx: NotContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionRegParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionRegParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionRegParser.atomic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomic?: (ctx: AtomicContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionRegParser.concurrence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcurrence?: (ctx: ConcurrenceContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionRegParser.req_year`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReq_year?: (ctx: Req_yearContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionRegParser.consent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConsent?: (ctx: ConsentContext) => Result;
}

