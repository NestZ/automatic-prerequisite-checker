import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { StudentModule } from '../student/student.module';
import { PreCheckerProvider } from './pre-checker.module';
import { PreCheckerService } from './pre-checker.service';

describe('PreCheckerService', () => {
  let service: PreCheckerService;
  let module: TestingModule;

  beforeAll(async () => {
    @Module({
      imports: [
        ConfigModule.forRoot(),
      ],
    })
    class RootModule {}

    module = await Test.createTestingModule({
      imports: [
        RootModule,
        StudentModule,
      ],
      providers: [PreCheckerService, PreCheckerProvider],
    }).compile();

    service = module.get<PreCheckerService>(PreCheckerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
