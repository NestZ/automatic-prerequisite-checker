import Expression from './Expression';

export default abstract class BinaryExpr extends Expression {
	private left: Expression;
	private right: Expression;

	constructor(left: Expression, right: Expression) {
		super();
		this.left = left;
		this.right = right;
	}

	public getLeftExpr(): Expression {
		return this.left;
	}

	public getRightExpr(): Expression {
		return this.right;
	}
}