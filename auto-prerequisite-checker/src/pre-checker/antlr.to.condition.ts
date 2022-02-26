import Or from './obj/Or';
import And from './obj/And';
import CourseNum from './obj/CourseNum';
import Major from './obj/Major';
import SubMajor from './obj/SubMajor';
import Faculty from './obj/Faculty';
import Atomic from './obj/Atomic';
import FacGroup from './obj/FacGroup';
import Expression from './obj/Expression';
import PreChecker from './ast.builder';
import { RegConditionVisitor } from './parser/RegConditionVisitor';
import { ConsentOf } from './obj/ConsentOf';
import { Year } from './obj/Year';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AndContext, AtomicContext, AtomicExpressionContext, At_least_req_yearContext, ConcurrenceContext, ConditionContext, ConsentContext, ExprContext, ExpressionContext, OrContext, ReqFacultyAndMajorContext, ReqFacultyContext, ReqMajorContext, ReqSubMajorContext, Req_fac_groupContext, Req_majorContext, Req_studentContext, Req_yearContext } from './parser/RegConditionParser';

export default class AntlrToCondition extends AbstractParseTreeVisitor<Expression> implements RegConditionVisitor<Expression> {
	public defaultResult(): Expression {
		return null;
	}

	public visitCondition(ctx: ConditionContext): Expression {
		return super.visit(ctx.expr());
	}

	public visitOr(ctx: OrContext): Or {
		const left: Expression = super.visit(ctx.expr(0));
		const right: Expression = super.visit(ctx.expr(1));
		return new Or(left, right);
	}

	public visitExpression(ctx: ExpressionContext): Expression {
		return super.visit(ctx.expr());
	}

	public visitAtomicExpression(ctx: AtomicExpressionContext): Expression {
		return super.visit(ctx.atomic());
	}

	public visitAnd(ctx: AndContext): And {
		const left: Expression = super.visit(ctx.expr(0));
		const right: Expression = super.visit(ctx.expr(1));
		return new And(left, right);
	}

	public visitAtomic(ctx: AtomicContext): Expression {
		const child: string = ctx.getChild(0).payload.text;
		if(!isNaN(Number(child))) return new CourseNum(child, false);
		else if(child == 'none' || child == 'see bulletin') return new Atomic(child);
		else return super.visit(ctx.getChild(0));
	}

	public visitReq_student(ctx: Req_studentContext): Expression {
		const fac: Expression = super.visit(ctx.getChild(1));
		if(ctx.getChild(0).payload.text !== 'for') {
			fac.setIsNon();
		}
		return fac;
	}

	public getFieldName(ctx: any): string {
		const cnt: number = ctx.childCount;
		let name: string = '';
		for(let i = 0;i < cnt;i++) {
			name += ctx.getChild(i).payload.text;
			if(i < cnt - 1) name += ' ';
		}
		return name;
	}

	public visitReqFaculty(ctx: ReqFacultyContext): Faculty {
		const facultyName: string = this.getFieldName(ctx.field());
		const facId: string = PreChecker.facultyId(facultyName);
		return new Faculty(facId, null);
	}

	public visitReqFacultyAndMajor(ctx: ReqFacultyAndMajorContext): Faculty {
		const facultyName: string = this.getFieldName(ctx.field());
		const facId: string = PreChecker.facultyId(facultyName);
		const childCtx: Req_majorContext = ctx.req_major();
		let dep: Major | SubMajor;
		if(childCtx instanceof ReqMajorContext) {
			const depName: string = this.getFieldName((childCtx as ReqMajorContext).field());
			const depId: string = PreChecker.majorId(facId, depName);
			dep = new Major(depId);
		} else {
			const depName: string = this.getFieldName((childCtx as ReqSubMajorContext).field());
			const depId: string = PreChecker.subMajorId(facId, depName);
			dep = new SubMajor(depId);
		}
		return new Faculty(facId, dep);
	}

	public visitReq_fac_group(ctx: Req_fac_groupContext): FacGroup {
		const groupName: string = this.getFieldName(ctx.field());
		let group: string = groupName;
		if(groupName !== 'science based') {
			group = PreChecker.facGroupId(groupName);
		}
		return new FacGroup(group);
	}

	public visitConcurrence(ctx: ConcurrenceContext): CourseNum {
		return new CourseNum(ctx.COURSE_NUM().payload.text, true);
	}

	public visitReq_year(ctx: Req_yearContext): Year {
		const yearStr: string = ctx.YEAR().payload.text;
		let year: number;
		switch(yearStr) {
			case 'first': {
				year = 1;
				break;
			} case 'second': {
				year = 2;
				break;
			} case 'third': {
				year = 3;
				break;
			} case 'fourth': {
				year = 4;
				break;
			} case 'fifth': {
				year = 5;
				break;
			} case 'sixth': {
				year = 6;
				break;
			} default: {
				throw yearStr + ' is invalid year';
			}
		}
		return new Year(year, false);
	}

	public visitAt_least_req_year(ctx: At_least_req_yearContext): Year {
		const year: Expression = super.visit(ctx.req_year());
		return new Year((year as Year).getYear(), true);
	}

	public visitConsent(ctx: ConsentContext): ConsentOf {
		const consentOf: string = ctx.CONSENT_OF().payload.text;
		return new ConsentOf(consentOf);
	}
}