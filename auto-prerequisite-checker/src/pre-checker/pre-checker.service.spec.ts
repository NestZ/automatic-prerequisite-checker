import { Test, TestingModule } from '@nestjs/testing';
import { PreCheckerService } from './pre-checker.service';

describe('PreCheckerService', () => {
  let service: PreCheckerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreCheckerService],
    }).compile();

    service = module.get<PreCheckerService>(PreCheckerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
