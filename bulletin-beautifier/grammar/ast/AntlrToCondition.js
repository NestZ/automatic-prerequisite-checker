import RegConditionVisitor from "./RegConditionVisitor.js";
import Or from "./Or.js";
import And from "./And.js";
import Condition from "./Condition.js";
import CourseNum from "./CourseNum.js";
import Major from "./Major.js";
import SubMajor from "./SubMajor.js";
import Faculty from "./Faculty.js";
import Atomic from "./Atomic.js";
import { ConsentOf } from "./ConsentOf.js";
import { Year } from "./Year.js";

export default class AntlrToCondition extends RegConditionVisitor {
	visitCondition(ctx) {
		return new Condition(super.visit(ctx.getChild(0)));
	}

	visitOr(ctx) {
		const left = super.visit(ctx.getChild(0));
		const right = super.visit(ctx.getChild(2));
		return new Or(left, right);
	}

	visitExpression(ctx) {
		return super.visit(ctx.getChild(1));
	}

	visitAtomicExpression(ctx) {
		return this.visitAtomic(ctx);
	}

	visitAnd(ctx) {
		const left = super.visit(ctx.getChild(0));
		const right = super.visit(ctx.getChild(2));
		return new And(left, right);
	}

	visitAtomic(ctx) {
		const child = ctx.getChild(0).getText();
		if(!isNaN(child)) return new CourseNum(child);
		else if(child == 'none' || child == 'see bulletin') return new Atomic(child);
		else return super.visit(ctx.getChild(0));
	}

	visitReq_student(ctx) {
		const fac = super.visit(ctx.getChild(1));
		if(ctx.getChild(0).getText() !== 'for') {
			fac.setIsNon();
		}
		return fac;
	}

	getFieldName(ctx) {
		const cnt = ctx.getChildCount();
		let name = "";
		for(let i = 0;i < cnt;i++) {
			name += ctx.getChild(i).getText();
			if(i < cnt - 1) name += " ";
		}
		return name;
	}

	visitReqFaculty(ctx) {
		return new Faculty(this.getFieldName(ctx.getChild(0)), null);
	}

	visitReqFacultyAndMajor(ctx) {
		const dep = super.visit(ctx.getChild(2));
		return new Faculty(this.getFieldName(ctx.getChild(0)), dep);
	}

	visitReqMajor(ctx) {
		return new Major(this.getFieldName(ctx.getChild(0)));
	}

	visitReqSubMajor(ctx) {
		return new SubMajor(this.getFieldName(ctx.getChild(0)));
	}

	visitConcurrence(ctx) {
		return new CourseNum(ctx.getChild(1).getText());
	}

	visitReq_year(ctx) {
		return new Year(ctx.getChild(0).getText(), false);
	}

	visitAt_least_req_year(ctx) {
		const year = super.visit(ctx.getChild(2));
		return new Year(year.getYear(), true);
	}

	visitConsent(ctx) {
		const consentOf = ctx.getChild(1).getText();
		return new ConsentOf(consentOf);
	}
}