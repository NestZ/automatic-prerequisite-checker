import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { StudentModule } from '../student/student.module';
import { PreCheckerController } from './pre-checker.controller';
import { PreCheckerProvider } from './pre-checker.module';
import { PreCheckerService } from './pre-checker.service';

describe('PreCheckerController', () => {
  let controller: PreCheckerController;
  let module: TestingModule;
  let service: PreCheckerService;

  beforeAll(async () => {
    @Module({
      imports: [
        ConfigModule.forRoot(),
      ],
    })
    class RootModule {}

    module = await Test.createTestingModule({
      imports: [
        StudentModule,
        RootModule,
      ],
      providers: [
        PreCheckerProvider,
        PreCheckerService,
      ],
      controllers: [PreCheckerController],
    }).compile();

    controller = module.get<PreCheckerController>(PreCheckerController);
    service = module.get<PreCheckerService>(PreCheckerService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
