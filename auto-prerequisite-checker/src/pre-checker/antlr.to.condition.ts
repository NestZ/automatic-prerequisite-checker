import Or from './obj/Or';
import And from './obj/And';
import Condition from './obj/Condition';
import CourseNum from './obj/CourseNum';
import Major from './obj/Major';
import SubMajor from './obj/SubMajor';
import Faculty from './obj/Faculty';
import Atomic from './obj/Atomic';
import FacGroup from './obj/FacGroup';
import Expression from './obj/Expression';
import { RegConditionVisitor } from './parser/RegConditionVisitor';
import { ConsentOf } from './obj/ConsentOf';
import { Year } from './obj/Year';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AndContext, AtomicContext, AtomicExpressionContext, At_least_req_yearContext, ConcurrenceContext, ConditionContext, ConsentContext, ExprContext, ExpressionContext, OrContext, ReqFacultyAndMajorContext, ReqFacultyContext, ReqMajorContext, ReqSubMajorContext, Req_fac_groupContext, Req_studentContext, Req_yearContext } from './parser/RegConditionParser';

export default class AntlrToCondition extends AbstractParseTreeVisitor<Expression> implements RegConditionVisitor<Expression> {
	defaultResult(): Expression {
		return null;
	}

	visitCondition(ctx: ConditionContext): Condition {
		return new Condition(super.visit(ctx.expr()));
	}

	visitOr(ctx: OrContext): Or {
		const left: Expression = super.visit(ctx.expr(0));
		const right: Expression = super.visit(ctx.expr(1));
		return new Or(left, right);
	}

	visitExpression(ctx: ExpressionContext): Expression {
		return super.visit(ctx.expr());
	}

	visitAtomicExpression(ctx: AtomicExpressionContext): Expression {
		return super.visit(ctx.atomic());
	}

	visitAnd(ctx: AndContext): And {
		const left: Expression = super.visit(ctx.expr(0));
		const right: Expression = super.visit(ctx.expr(1));
		return new And(left, right);
	}

	visitAtomic(ctx: AtomicContext): Expression {
		const child: string = ctx.getChild(0).payload.text;
		if(!isNaN(Number(child))) return new CourseNum(child);
		else if(child == 'none' || child == 'see bulletin') return new Atomic(child);
		else return super.visit(ctx.getChild(0));
	}

	visitReq_student(ctx: Req_studentContext): Expression {
		const fac: Expression = super.visit(ctx.getChild(1));
		if(ctx.getChild(0).payload.text !== 'for') {
			fac.setIsNon();
		}
		return fac;
	}

	getFieldName(ctx: any): string {
		const cnt: number = ctx.childCount;
		let name: string = '';
		for(let i = 0;i < cnt;i++) {
			name += ctx.getChild(i).payload.text;
			if(i < cnt - 1) name += ' ';
		}
		return name;
	}

	visitReqFaculty(ctx: ReqFacultyContext): Faculty {
		const facultyName: string = this.getFieldName(ctx.field());
		return new Faculty(facultyName, null);
	}

	visitReqFacultyAndMajor(ctx: ReqFacultyAndMajorContext): Faculty {
		const dep: Expression = super.visit(ctx.req_major());
		const facultyName: string = this.getFieldName(ctx.field());
		return new Faculty(facultyName, (dep as Major));
	}

	visitReq_fac_group(ctx: Req_fac_groupContext): FacGroup {
		const groupName: string = this.getFieldName(ctx.field());
		return new FacGroup(groupName);
	}

	visitReqMajor(ctx: ReqMajorContext): Major {
		const majorName: string = this.getFieldName(ctx.field());
		return new Major(majorName);
	}

	visitReqSubMajor(ctx: ReqSubMajorContext): SubMajor {
		const subMajorName: string = this.getFieldName(ctx.field());
		return new SubMajor(subMajorName);
	}

	visitConcurrence(ctx: ConcurrenceContext): CourseNum {
		//TODO: print concurrent to
		return new CourseNum(ctx.COURSE_NUM().payload.text);
	}

	visitReq_year(ctx: Req_yearContext): Year {
		return new Year(ctx.YEAR().payload.text, false);
	}

	visitAt_least_req_year(ctx: At_least_req_yearContext): Year {
		const year: Expression = super.visit(ctx.req_year());
		return new Year((year as Year).getYear(), true);
	}

	visitConsent(ctx: ConsentContext): ConsentOf {
		const consentOf: string = ctx.CONSENT_OF().payload.text;
		return new ConsentOf(consentOf);
	}
}