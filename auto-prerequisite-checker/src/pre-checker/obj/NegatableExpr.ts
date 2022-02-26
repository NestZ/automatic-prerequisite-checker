import Expression from "./Expression";

export default abstract class NegatableExpr extends Expression {
	private isNon: boolean;

	constructor() {
		super();
		this.isNon = false;
	}

	public setIsNon(): void {
		this.isNon = true;
	}

	public getIsNon(): boolean {
		return this.isNon;
	}
}