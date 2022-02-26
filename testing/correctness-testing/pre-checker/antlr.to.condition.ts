import Or from '../obj/Or';
import And from '../obj/And';
import CourseNum from '../obj/CourseNum';
import Major from '../obj/Major';
import SubMajor from '../obj/SubMajor';
import Faculty from '../obj/Faculty';
import FacGroup from '../obj/FacGroup';
import Expression from '../obj/Expression';
import PreChecker from './ast.builder';
import None from '../obj/None';
import NegatableExpr from '../../../auto-prerequisite-checker/src/pre-checker/obj/NegatableExpr';
import { RegConditionVisitor } from './parser/RegConditionVisitor';
import { ConsentOf } from '../obj/ConsentOf';
import { Year } from '../obj/Year';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AndContext, AtomicContext, AtomicExpressionContext, At_least_req_yearContext, ConcurrenceContext, ConditionContext, ConsentContext, ExprContext, ExpressionContext, OrContext, ReqFacultyAndMajorContext, ReqFacultyContext, ReqMajorContext, ReqSubMajorContext, Req_fac_groupContext, Req_majorContext, Req_studentContext, Req_yearContext } from './parser/RegConditionParser';

export default class AntlrToCondition extends AbstractParseTreeVisitor<Expression> implements RegConditionVisitor<Expression> {
	defaultResult(): Expression {
		return null;
	}

	visitCondition(ctx: ConditionContext): Expression {
		return super.visit(ctx.expr());
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
		if(!isNaN(Number(child))) return new CourseNum(child, false);
		else if(child == 'none') return new None();
		else return super.visit(ctx.getChild(0));
	}

	visitReq_student(ctx: Req_studentContext): Expression {
		const fac: Expression = super.visit(ctx.getChild(1));
		if(ctx.getChild(0).payload.text !== 'for') {
			(fac as any as NegatableExpr).setIsNon();
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
		const facId: string = PreChecker.facultyId(facultyName);
		return new Faculty(facId, null);
	}

	visitReqFacultyAndMajor(ctx: ReqFacultyAndMajorContext): Faculty {
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

	visitReq_fac_group(ctx: Req_fac_groupContext): FacGroup {
		const groupName: string = this.getFieldName(ctx.field());
		let group: string = groupName;
		if(groupName !== 'science based') {
			group = PreChecker.facGroupId(groupName);
		}
		return new FacGroup(group);
	}

	visitConcurrence(ctx: ConcurrenceContext): CourseNum {
		return new CourseNum(ctx.COURSE_NUM().payload.text, true);
	}

	visitReq_year(ctx: Req_yearContext): Year {
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

	visitAt_least_req_year(ctx: At_least_req_yearContext): Year {
		const year: Expression = super.visit(ctx.req_year());
		return new Year((year as Year).getYearNumber(), true);
	}

	visitConsent(ctx: ConsentContext): ConsentOf {
		const consentOf: string = ctx.CONSENT_OF().payload.text;
		return new ConsentOf(consentOf);
	}
}