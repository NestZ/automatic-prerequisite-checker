// Generated from pre-checker/RegCondition.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ReqMajorContext } from "./RegConditionParser";
import { ReqSubMajorContext } from "./RegConditionParser";
import { ReqFacultyContext } from "./RegConditionParser";
import { ReqFacultyAndMajorContext } from "./RegConditionParser";
import { ExpressionContext } from "./RegConditionParser";
import { AtomicExpressionContext } from "./RegConditionParser";
import { AndContext } from "./RegConditionParser";
import { OrContext } from "./RegConditionParser";
import { ConditionContext } from "./RegConditionParser";
import { ExprContext } from "./RegConditionParser";
import { AtomicContext } from "./RegConditionParser";
import { Req_studentContext } from "./RegConditionParser";
import { Req_facContext } from "./RegConditionParser";
import { Req_fac_groupContext } from "./RegConditionParser";
import { Req_majorContext } from "./RegConditionParser";
import { ConcurrenceContext } from "./RegConditionParser";
import { Req_yearContext } from "./RegConditionParser";
import { At_least_req_yearContext } from "./RegConditionParser";
import { ConsentContext } from "./RegConditionParser";
import { FieldContext } from "./RegConditionParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RegConditionParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RegConditionVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ReqMajor`
	 * labeled alternative in `RegConditionParser.req_major`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReqMajor?: (ctx: ReqMajorContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReqSubMajor`
	 * labeled alternative in `RegConditionParser.req_major`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReqSubMajor?: (ctx: ReqSubMajorContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReqFaculty`
	 * labeled alternative in `RegConditionParser.req_fac`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReqFaculty?: (ctx: ReqFacultyContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReqFacultyAndMajor`
	 * labeled alternative in `RegConditionParser.req_fac`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReqFacultyAndMajor?: (ctx: ReqFacultyAndMajorContext) => Result;

	/**
	 * Visit a parse tree produced by the `Expression`
	 * labeled alternative in `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AtomicExpression`
	 * labeled alternative in `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomicExpression?: (ctx: AtomicExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `And`
	 * labeled alternative in `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd?: (ctx: AndContext) => Result;

	/**
	 * Visit a parse tree produced by the `Or`
	 * labeled alternative in `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr?: (ctx: OrContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionParser.atomic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomic?: (ctx: AtomicContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionParser.req_student`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReq_student?: (ctx: Req_studentContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionParser.req_fac`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReq_fac?: (ctx: Req_facContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionParser.req_fac_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReq_fac_group?: (ctx: Req_fac_groupContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionParser.req_major`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReq_major?: (ctx: Req_majorContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionParser.concurrence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcurrence?: (ctx: ConcurrenceContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionParser.req_year`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReq_year?: (ctx: Req_yearContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionParser.at_least_req_year`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAt_least_req_year?: (ctx: At_least_req_yearContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionParser.consent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConsent?: (ctx: ConsentContext) => Result;

	/**
	 * Visit a parse tree produced by `RegConditionParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;
}

