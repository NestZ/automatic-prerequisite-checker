import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import PreChecker from './ast.builder';

@Injectable()
export class PreCheckerService implements OnModuleInit {
	private ast;

	constructor(@Inject('PRE_CHECKER') private preChecker: PreChecker) {}

	onModuleInit() {
		this.ast = PreChecker.getAST();
	}
}
