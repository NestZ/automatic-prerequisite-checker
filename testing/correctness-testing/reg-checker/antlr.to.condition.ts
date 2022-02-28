import Or from '../obj/Or';
import And from '../obj/And';
import CourseNum from '../obj/CourseNum';
import Major from '../obj/Major';
import SubMajor from '../obj/SubMajor';
import Faculty from '../obj/Faculty';
import Expression from '../obj/Expression';
import NegatableExpr from '../../../auto-prerequisite-checker/src/pre-checker/obj/NegatableExpr';
import None from '../obj/None';
import { RegConditionRegVisitor } from './parser/RegConditionRegVisitor';
import { ConsentOf } from '../obj/ConsentOf';
import { Year } from '../obj/Year';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AndContext, AtomicContext, AtomicExpressionContext, ConcurrenceContext, ConditionContext, ConsentContext, ExpressionContext, NotContext, OrContext, Req_yearContext } from './parser/RegConditionRegParser';
import PreChecker from '../../../auto-prerequisite-checker/src/pre-checker/ast.builder';

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
			const facName = (left as Faculty).getFacultyName();
			const facId = (left as Faculty).getFacultyId();
			if(right instanceof Major) {
				return new Faculty(facId, facName, right as Major);
			} else if(right instanceof SubMajor) {
				return new Faculty(facId, facName, right as SubMajor);
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
		(expr as any as NegatableExpr).setIsNon();
		return expr;
	}

	visitCondition(ctx: ConditionContext): Expression {
		return super.visit(ctx.expr());
	}

	visitAtomic(ctx: AtomicContext): Expression {
		const child: string = ctx.getChild(0).payload.text;
		if(!isNaN(Number(child))) return new CourseNum(child, false);
		else if(child == 'none') return new None();
		else if(child == 'fac') {
			const facId: string = ctx.FIELD_NUM().payload.text;
			const facName: string = PreChecker.facultyName(facId);
			return new Faculty(facId, facName, null);
		}
		else if(child == 'ma') return new Major('', ctx.FIELD_NUM().payload.text, '');
		else if(child == 'sub') return new SubMajor('', '', ctx.FIELD_NUM().payload.text, '');
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