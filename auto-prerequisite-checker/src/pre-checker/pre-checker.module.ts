import PreChecker from './ast.builder';
import { Module } from '@nestjs/common';
import { PreCheckerService } from './pre-checker.service';
import { PreCheckerController } from './pre-checker.controller';
import { StudentModule } from '../student/student.module';

export const PreCheckerProvider = {
  provide: 'PRE_CHECKER',
  useClass: PreChecker,
}

@Module({
  imports: [StudentModule],
  providers: [PreCheckerProvider, PreCheckerService],
  exports: [PreCheckerProvider],
  controllers: [PreCheckerController],
})
export class PreCheckerModule {}
