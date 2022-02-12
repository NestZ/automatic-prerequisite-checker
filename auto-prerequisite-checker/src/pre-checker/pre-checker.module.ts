import PreChecker from './ast.builder';
import { Module } from '@nestjs/common';
import { PreCheckerService } from './pre-checker.service';

export const PreCheckerProvider = {
  provide: 'PRE_CHECKER',
  useClass: PreChecker,
}

@Module({
  providers: [PreCheckerProvider, PreCheckerService],
  exports: [PreCheckerProvider],
})
export class PreCheckerModule {}
