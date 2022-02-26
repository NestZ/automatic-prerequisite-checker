import * as NoneObj from '../../../auto-prerequisite-checker/src/pre-checker/obj/None';
import Expression from './Expression';

export default class None extends NoneObj.default {
	public evalTest(lst: Expression[], truth: Array<boolean>): boolean {
		return true;
	}
}