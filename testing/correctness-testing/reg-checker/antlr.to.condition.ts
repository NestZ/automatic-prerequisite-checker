import Or from '../pre-checker/obj/Or';
import And from '../pre-checker/obj/And';
import CourseNum from '../pre-checker/obj/CourseNum';
import Major from '../pre-checker/obj/Major';
import SubMajor from '../pre-checker/obj/SubMajor';
import Faculty from '../pre-checker/obj/Faculty';
import Atomic from '../pre-checker/obj/Atomic';
import Expression from '../pre-checker/obj/Expression';
import { RegConditionRegVisitor } from './parser/RegConditionRegVisitor';
import { ConsentOf } from '../pre-checker/obj/ConsentOf';
import { Year } from '../pre-checker/obj/Year';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AndContext, AtomicContext, AtomicExpressionContext, ConcurrenceContext, ConditionContext, ConsentContext, ExpressionContext, NotContext, OrContext, Req_yearContext } from './parser/RegConditionRegParser';

export default class AntlrToCondition extends AbstractParseTreeVisitor<Expression> implements RegConditionRegVisitor<Expression> {
	defaultResult(): Expression {
		return null;
	}

	visitExpression(ctx: ExpressionContext): Expression {
		return super.visit(ctx.expr());
	}

	visitAtomicExpression(ctx: AtomicExpressionContext): Expression {
		return super.visit(ctx.atomic());
	}

	visitAnd(ctx: AndContext): Expression {
		const left: Expression = super.visit(ctx.expr(0));
		const right: Expression = super.visit(ctx.expr(1));
		if(left instanceof Faculty && (right instanceof Major || right instanceof SubMajor)) {
			if(right instanceof Major) {
				return new Faculty((left as Faculty).getFacultyId(), right as Major);
			} else if(right instanceof SubMajor) {
				return new Faculty((left as Faculty).getFacultyId(), right as SubMajor);
			}
		}
		return new And(left, right);
	}

	visitOr(ctx: OrContext): Expression {
		const left: Expression = super.visit(ctx.expr(0));
		const right: Expression = super.visit(ctx.expr(1));
		return new Or(left, right);
	}

	visitNot(ctx: NotContext): Expression {
		const expr: Expression = super.visit(ctx.expr());
		expr.setIsNon();
		return expr;
	}

	visitCondition(ctx: ConditionContext): Expression {
		return super.visit(ctx.expr());
	}

	visitAtomic(ctx: AtomicContext): Expression {
		const child: string = ctx.getChild(0).payload.text;
		if(!isNaN(Number(child))) return new CourseNum(child, false);
		else if(child == 'none' || child == 'see bulletin') return new Atomic(child);
		else if(child == 'fac') return new Faculty(ctx.FIELD_NUM().payload.text, null);
		else if(child == 'ma') return new Major(ctx.FIELD_NUM().payload.text);
		else if(child == 'sub') return new SubMajor(ctx.FIELD_NUM().payload.text);
		else return super.visit(ctx.getChild(0));
	}

	visitConcurrence(ctx: ConcurrenceContext): Expression {
		return new CourseNum(ctx.COURSE_NUM().payload.text, true);
	}

	visitReq_year(ctx: Req_yearContext): Expression {
		const yearStr: string = ctx.YEAR().payload.text;
		let year: number;
		switch(yearStr) {
			case '1st': {
				year = 1;
				break;
			} case '2nd': {
				year = 2;
				break;
			} case '3rd': {
				year = 3;
				break;
			} case '4th': {
				year = 4;
				break;
			} case '5th': {
				year = 5;
				break;
			} case '6th': {
				year = 6;
				break;
			} default: {
				throw yearStr + ' is invalid year';
			}
		}
		return new Year(year, false);
	}

	visitConsent(ctx: ConsentContext): Expression {
		const consentOf: string = 'consentOf';
		return new ConsentOf(consentOf);
	}
}