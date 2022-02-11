// Generated from RegCondition.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by RegConditionParser.

export default class RegConditionVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by RegConditionParser#condition.
	visitCondition(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#Or.
	visitOr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#Expression.
	visitExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#AtomicExpression.
	visitAtomicExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#And.
	visitAnd(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#atomic.
	visitAtomic(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#req_student.
	visitReq_student(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#ReqFaculty.
	visitReqFaculty(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#ReqFacultyAndMajor.
	visitReqFacultyAndMajor(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#req_fac_group.
	visitReq_fac_group(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#ReqMajor.
	visitReqMajor(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#ReqSubMajor.
	visitReqSubMajor(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#concurrence.
	visitConcurrence(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#req_year.
	visitReq_year(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#at_least_req_year.
	visitAt_least_req_year(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#consent.
	visitConsent(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by RegConditionParser#field.
	visitField(ctx) {
	  return this.visitChildren(ctx);
	}



}