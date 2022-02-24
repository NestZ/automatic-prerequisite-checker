// Generated from RegCondition.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `RegConditionParser`.
 */
export interface RegConditionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `ReqMajor`
	 * labeled alternative in `RegConditionParser.req_major`.
	 * @param ctx the parse tree
	 */
	enterReqMajor?: (ctx: ReqMajorContext) => void;
	/**
	 * Exit a parse tree produced by the `ReqMajor`
	 * labeled alternative in `RegConditionParser.req_major`.
	 * @param ctx the parse tree
	 */
	exitReqMajor?: (ctx: ReqMajorContext) => void;

	/**
	 * Enter a parse tree produced by the `ReqSubMajor`
	 * labeled alternative in `RegConditionParser.req_major`.
	 * @param ctx the parse tree
	 */
	enterReqSubMajor?: (ctx: ReqSubMajorContext) => void;
	/**
	 * Exit a parse tree produced by the `ReqSubMajor`
	 * labeled alternative in `RegConditionParser.req_major`.
	 * @param ctx the parse tree
	 */
	exitReqSubMajor?: (ctx: ReqSubMajorContext) => void;

	/**
	 * Enter a parse tree produced by the `ReqFaculty`
	 * labeled alternative in `RegConditionParser.req_fac`.
	 * @param ctx the parse tree
	 */
	enterReqFaculty?: (ctx: ReqFacultyContext) => void;
	/**
	 * Exit a parse tree produced by the `ReqFaculty`
	 * labeled alternative in `RegConditionParser.req_fac`.
	 * @param ctx the parse tree
	 */
	exitReqFaculty?: (ctx: ReqFacultyContext) => void;

	/**
	 * Enter a parse tree produced by the `ReqFacultyAndMajor`
	 * labeled alternative in `RegConditionParser.req_fac`.
	 * @param ctx the parse tree
	 */
	enterReqFacultyAndMajor?: (ctx: ReqFacultyAndMajorContext) => void;
	/**
	 * Exit a parse tree produced by the `ReqFacultyAndMajor`
	 * labeled alternative in `RegConditionParser.req_fac`.
	 * @param ctx the parse tree
	 */
	exitReqFacultyAndMajor?: (ctx: ReqFacultyAndMajorContext) => void;

	/**
	 * Enter a parse tree produced by the `Expression`
	 * labeled alternative in `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `Expression`
	 * labeled alternative in `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AtomicExpression`
	 * labeled alternative in `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAtomicExpression?: (ctx: AtomicExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AtomicExpression`
	 * labeled alternative in `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAtomicExpression?: (ctx: AtomicExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `And`
	 * labeled alternative in `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAnd?: (ctx: AndContext) => void;
	/**
	 * Exit a parse tree produced by the `And`
	 * labeled alternative in `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAnd?: (ctx: AndContext) => void;

	/**
	 * Enter a parse tree produced by the `Or`
	 * labeled alternative in `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 */
	enterOr?: (ctx: OrContext) => void;
	/**
	 * Exit a parse tree produced by the `Or`
	 * labeled alternative in `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 */
	exitOr?: (ctx: OrContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionParser.atomic`.
	 * @param ctx the parse tree
	 */
	enterAtomic?: (ctx: AtomicContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionParser.atomic`.
	 * @param ctx the parse tree
	 */
	exitAtomic?: (ctx: AtomicContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionParser.req_student`.
	 * @param ctx the parse tree
	 */
	enterReq_student?: (ctx: Req_studentContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionParser.req_student`.
	 * @param ctx the parse tree
	 */
	exitReq_student?: (ctx: Req_studentContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionParser.req_fac`.
	 * @param ctx the parse tree
	 */
	enterReq_fac?: (ctx: Req_facContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionParser.req_fac`.
	 * @param ctx the parse tree
	 */
	exitReq_fac?: (ctx: Req_facContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionParser.req_fac_group`.
	 * @param ctx the parse tree
	 */
	enterReq_fac_group?: (ctx: Req_fac_groupContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionParser.req_fac_group`.
	 * @param ctx the parse tree
	 */
	exitReq_fac_group?: (ctx: Req_fac_groupContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionParser.req_major`.
	 * @param ctx the parse tree
	 */
	enterReq_major?: (ctx: Req_majorContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionParser.req_major`.
	 * @param ctx the parse tree
	 */
	exitReq_major?: (ctx: Req_majorContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionParser.concurrence`.
	 * @param ctx the parse tree
	 */
	enterConcurrence?: (ctx: ConcurrenceContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionParser.concurrence`.
	 * @param ctx the parse tree
	 */
	exitConcurrence?: (ctx: ConcurrenceContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionParser.req_year`.
	 * @param ctx the parse tree
	 */
	enterReq_year?: (ctx: Req_yearContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionParser.req_year`.
	 * @param ctx the parse tree
	 */
	exitReq_year?: (ctx: Req_yearContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionParser.at_least_req_year`.
	 * @param ctx the parse tree
	 */
	enterAt_least_req_year?: (ctx: At_least_req_yearContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionParser.at_least_req_year`.
	 * @param ctx the parse tree
	 */
	exitAt_least_req_year?: (ctx: At_least_req_yearContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionParser.consent`.
	 * @param ctx the parse tree
	 */
	enterConsent?: (ctx: ConsentContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionParser.consent`.
	 * @param ctx the parse tree
	 */
	exitConsent?: (ctx: ConsentContext) => void;

	/**
	 * Enter a parse tree produced by `RegConditionParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `RegConditionParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;
}

