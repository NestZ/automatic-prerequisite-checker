import { Test, TestingModule } from '@nestjs/testing';
import { PreCheckerController } from './pre-checker.controller';

describe('PreCheckerController', () => {
  let controller: PreCheckerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreCheckerController],
    }).compile();

    controller = module.get<PreCheckerController>(PreCheckerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
