import RegPreChecker from "./reg-checker/ast.builder";
import PreChecker from "./pre-checker/ast.builder";
import Expression from "./obj/Expression";
import CourseNum from "./obj/CourseNum";
import FacGroup from "./obj/FacGroup";
import Faculty from "./obj/Faculty";
import Major from "./obj/Major";
import SubMajor from "./obj/SubMajor";
import And from "./obj/And";
import Or from "./obj/Or";
import None from "./obj/None";
import { ConsentOf } from "./obj/ConsentOf";
import { Year } from "./obj/Year";
import { CourseCondition } from "./pre-checker/data.type.decl";

export default class EqualAst {
	private static myAst: CourseCondition = PreChecker.getAST();
	private static regAst: CourseCondition = RegPreChecker.getAST();
	public static notEq: string[] = [];
	public static dup: string[] = [];

	public static hashNone(obj: None): string {
		return obj.toString();
	}

	public static hashConsentOf(obj: ConsentOf): string {
		return 'consent';
	}

	public static hashCourseNum(obj: CourseNum): string {
		let ret: string = 'cid' + obj.getCourseNum();
		if(obj.getIsConcurrent()) ret = 'con-' + ret;
		return ret;
	}

	public static hashFacGroup(obj: FacGroup): string {
		return 'group' + obj.getFacGroup();
	}

	public static hashFaculty(obj: Faculty): string {
		let ret: string = 'fac' + obj.getFacultyId();
		if(obj.getDep() instanceof Major) ret += EqualAst.hashMajor(obj.getDep() as Major);
		else if(obj.getDep() instanceof SubMajor) ret += EqualAst.hashSubMajor(obj.getDep() as SubMajor);
		return ret;
	}

	public static hashMajor(obj: Major): string {
		return 'major' + obj.getMajorId();
	}

	public static hashSubMajor(obj: SubMajor): string {
		return 'subMajor' + obj.getSubMajorId();
	}

	public static hashYear(obj: Year): string {
		let ret: string = 'year' + String(obj.getYearNumber());
		if(obj.getIsAtLeast()) ret = 'at-least-' + ret;
		return ret;
	}

	public static hash(obj: Expression): string {
		if(obj instanceof ConsentOf) return EqualAst.hashConsentOf(obj);
		else if(obj instanceof CourseNum) return EqualAst.hashCourseNum(obj);
		else if(obj instanceof FacGroup) return EqualAst.hashFacGroup(obj);
		else if(obj instanceof Faculty) return EqualAst.hashFaculty(obj);
		else if(obj instanceof Major) return EqualAst.hashMajor(obj);
		else if(obj instanceof SubMajor) return EqualAst.hashSubMajor(obj);
		else if(obj instanceof Year) return EqualAst.hashYear(obj);
		else if(obj instanceof None) return EqualAst.hashNone(obj);
	}

	public static getNodesRecur(tree: Expression, expr: Expression[]): void {
		if(tree instanceof And || tree instanceof Or) {
			EqualAst.getNodesRecur(tree.getLeftExpr() as Expression, expr);
			EqualAst.getNodesRecur(tree.getRightExpr() as Expression, expr);
		}
		else expr.push(tree);
	}

	public static getNodes(tree: Expression): Expression[] {
		const expr: Expression[] = [];
		EqualAst.getNodesRecur(tree, expr);
		return expr;
	}
	
	public static sortNodes(nodes: Expression[]): Expression[] {
		return nodes.sort((fst: Expression, snd: Expression) => {
			const fstHash: string = EqualAst.hash(fst);
			const sndHash: string = EqualAst.hash(snd);
			return fstHash.localeCompare(sndHash);
		});
	}

	public static cmpNodes(fst: Expression, snd: Expression): boolean {
		return EqualAst.hash(fst) === EqualAst.hash(snd);
	}

	public static cmpTruthTable(lst: Expression[], fstTree: Expression, sndTree: Expression): boolean {
		const len: number = lst.length;
		const truth: Array<boolean> = new Array<boolean>(len);
		for(let i: number = 0;i < (1 << len);i++) {
			for(let j: number = 0;j < len;j++) {
				if((1 << j) & i) truth[j] = true;
				else truth[j] = false;
			}
			if(fstTree.evalTest(lst, truth) !== sndTree.evalTest(lst, truth)) return false;
		}
		return true;
	}

	public static equalsTree(fst: Expression, snd: Expression, courseId: string): boolean {
		let fstNodes: Expression[] = EqualAst.getNodes(fst);
		let sndNodes: Expression[] = EqualAst.getNodes(snd);
		fstNodes = EqualAst.sortNodes(fstNodes);
		sndNodes = EqualAst.sortNodes(sndNodes);
		if(fstNodes.length !== sndNodes.length) return false;
		for(let i = 0;i < fstNodes.length;i++) {
			if(!EqualAst.cmpNodes(fstNodes[i], sndNodes[i])) return false;
		}
		let dup: boolean = false;
		for(let i: number = 0;i < fstNodes.length;i++) {
			for(let j: number = i + 1;j < fstNodes.length;j++){
				if(EqualAst.cmpNodes(fstNodes[i], fstNodes[j])) dup = true;
			}
		}
		if(!dup) {
			return EqualAst.cmpTruthTable(fstNodes, fst, snd);
		}
		else {
			EqualAst.dup.push(courseId);
			return true;
		}
	}

	//(100112 and third year standing) or (100112 and second year standing and consent of the department and for education students in early childhood education-special education major)
	//(3rd and 100112) or (100112 and (fac = 02 and ma = 27)) and consent
	
	public static equalityCheck() {
		const err: string[] = [];
		for(const key in EqualAst.myAst) {
			const myCondition: Expression = EqualAst.myAst[key];
			const regCondition: Expression = EqualAst.regAst[key];
			if(!EqualAst.equalsTree(myCondition, regCondition, key)) EqualAst.notEq.push(key);
		}
	}
}

EqualAst.equalityCheck();
console.log(EqualAst.notEq);
console.log(EqualAst.dup);
console.log('number of condition that not match : ' + String(EqualAst.notEq.length));
console.log('number of condition that have duplicate node : ' + String(EqualAst.dup.length))
