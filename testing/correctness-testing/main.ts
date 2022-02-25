import RegPreChecker from "./reg-checker/ast.builder";
import PreChecker from "./pre-checker/ast.builder";
import Expression from "./pre-checker/obj/Expression";
import Atomic from "./pre-checker/obj/Atomic";
import CourseNum from "./pre-checker/obj/CourseNum";
import FacGroup from "./pre-checker/obj/FacGroup";
import Faculty from "./pre-checker/obj/Faculty";
import Major from "./pre-checker/obj/Major";
import SubMajor from "./pre-checker/obj/SubMajor";
import And from "./pre-checker/obj/And";
import Or from "./pre-checker/obj/Or";
import { ConsentOf } from "./pre-checker/obj/ConsentOf";
import { Year } from "./pre-checker/obj/Year";
import { CourseCondition } from "./pre-checker/data.type.decl";

export default class EqualAst {
	private myAst: CourseCondition = PreChecker.getAST();
	private regAst: CourseCondition = RegPreChecker.getAST();

	public hashAtomic(obj: Atomic): string {
		return obj.getName();
	}

	public hashConsentOf(obj: ConsentOf): string {
		return 'consent';
	}

	public hashCourseNum(obj: CourseNum): string {
		let ret = obj.getCourseNum();
		if(obj.getIsConcurrent()) ret = 'con' + ret;
		return ret;
	}

	public hashFacGroup(obj: FacGroup): string {
		return obj.getFacultyGroup();
	}

	public hashFaculty(obj: Faculty): string {
		let ret = obj.getFacultyId();
		if(obj.getDep() instanceof Major) ret += this.hashMajor(obj.getDep() as Major);
		else if(obj.getDep() instanceof SubMajor) ret += this.hashSubMajor(obj.getDep() as SubMajor);
		return ret;
	}

	public hashMajor(obj: Major): string {
		return obj.getDepId();
	}

	public hashSubMajor(obj: SubMajor): string {
		return obj.getDepId();
	}

	public hashYear(obj: Year): string {
		let ret = String(obj.getYear());
		if(obj.getIsAtLeast()) ret = 'at-least' + ret;
		return ret;
	}

	public hash(obj: Expression): string {
		if(obj instanceof ConsentOf) return this.hashConsentOf(obj);
		else if(obj instanceof CourseNum) return this.hashCourseNum(obj);
		else if(obj instanceof FacGroup) return this.hashFacGroup(obj);
		else if(obj instanceof Faculty) return this.hashFaculty(obj);
		else if(obj instanceof Major) return this.hashMajor(obj);
		else if(obj instanceof SubMajor) return this.hashSubMajor(obj);
		else if(obj instanceof Year) return this.hashYear(obj);
		else if(obj instanceof Atomic) return this.hashAtomic(obj);
	}

	public getNodesRecur(tree: Expression, expr: Expression[]): void {
		if(tree instanceof And || tree instanceof Or) {
			this.getNodesRecur(tree.getLeftExpr(), expr);
			this.getNodesRecur(tree.getRightExpr(), expr);
		}
		else expr.push(tree);
	}

	public getNodes(tree: Expression): Expression[] {
		const expr: Expression[] = [];
		this.getNodesRecur(tree, expr);
		return expr;
	}
	
	public sortNodes(nodes: Expression[]): Expression[] {
		return nodes.sort((fst: Expression, snd: Expression) => {
			const fstHash = this.hash(fst);
			const sndHash = this.hash(snd);
			return fstHash.localeCompare(sndHash);
		});
	}

	public cmpNodes(fst: Expression, snd: Expression): boolean {
		return this.hash(fst) === this.hash(snd);
	}

	public cmpTruthTable(fst: Expression[], snd: Expression[], fstTree: Expression, sndTree: Expression): boolean {
		// create two array to store truth value
		// iterate through all possibility
		// check if truth value equal
		return true;
	}

	public cnt = 0;

	public equalsTree(fst: Expression, snd: Expression): boolean {
		// get all nodes of two ast
		let fstNodes = this.getNodes(fst);
		let sndNodes = this.getNodes(snd);
		// sort node
		fstNodes = this.sortNodes(fstNodes);
		sndNodes = this.sortNodes(sndNodes);
		// compare each node
		if(fstNodes.length !== sndNodes.length) return false;
		for(let i = 0;i < fstNodes.length;i++) {
			if(!this.cmpNodes(fstNodes[i], sndNodes[i])) return false;
		}
		for(let i = 0;i < fstNodes.length;i++){
			for(let j = i + 1;j < fstNodes.length;j++){
				if(this.cmpNodes(fstNodes[i], fstNodes[j])) this.cnt++;
			}
		}
		// compare truth table
		return this.cmpTruthTable(fstNodes, sndNodes, fst, snd);
	}
	
	public equalityCheck() {
		const err: string[] = [];
		for(const key in this.myAst) {
			const myCondition = this.myAst[key];
			const regCondition = this.regAst[key];
			if(!this.equalsTree(myCondition, regCondition)) err.push(key);
		}
		console.log(err);
		console.log(err.length);
		console.log(this.cnt);
	}
}

const eq = new EqualAst();
eq.equalityCheck();