import Or from '../pre-checker/obj/Or';
import And from '../pre-checker/obj/And';
import Condition from '../pre-checker/obj/Condition';
import CourseNum from '../pre-checker/obj/CourseNum';
import Major from '../pre-checker/obj/Major';
import SubMajor from '../pre-checker/obj/SubMajor';
import Faculty from '../pre-checker/obj/Faculty';
import Atomic from '../pre-checker/obj/Atomic';
import FacGroup from '../pre-checker/obj/FacGroup';
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
		if(left instanceof Faculty && right instanceof Major) { // sub major ?
			return new Faculty((left as Faculty).getFaculty(), (right as Major)); // sub major ?
		}
		return new And(left, right);
	}

	visitOr(ctx: OrContext): Expression {
		const left: Expression = super.visit(ctx.expr(0));
		const right: Expression = super.visit(ctx.expr(1));
		return new Or(left, right);
	}

	visitNot(ctx: NotContext): Expression {
		const field = super.visit(ctx.expr()) as Faculty;
		field.setIsNon();
		return field;
	}

	visitCondition(ctx: ConditionContext): Expression {
		return new Condition(super.visit(ctx.expr()));
	}

	visitAtomic(ctx: AtomicContext): Expression {
		const child: string = ctx.getChild(0).payload.text;
		if(!isNaN(Number(child))) return new CourseNum(child, false);
		else if(child == 'none' || child == 'see bulletin') return new Atomic(child);
		else if(child == 'fac') return new Faculty(ctx.FIELD_NUM().payload.text, null);
		else if(child == 'ma') return new Major(ctx.FIELD_NUM().payload.text); // sub major ?
		else return super.visit(ctx.getChild(0));
	}

	visitConcurrence(ctx: ConcurrenceContext): Expression {
		return new CourseNum(ctx.COURSE_NUM().payload.text, true);
	}

	visitReq_year(ctx: Req_yearContext): Expression {
		return new Year(ctx.YEAR().payload.text, false);
	}

	visitConsent(ctx: ConsentContext): Expression {
		const consentOf: string = 'consentOf';
		return new ConsentOf(consentOf);
	}
}