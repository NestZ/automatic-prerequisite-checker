import * as ExpressionObj from '../../../auto-prerequisite-checker/src/pre-checker/obj/Expression'

export default abstract class Expression extends ExpressionObj.default {
	abstract evalTest(lst: Expression[], truth: Array<boolean>): boolean;
}