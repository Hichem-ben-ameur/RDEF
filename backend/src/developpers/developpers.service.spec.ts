import { Test, TestingModule } from '@nestjs/testing';
import { DeveloppersService } from './developpers.service';

describe('DeveloppersService', () => {
  let service: DeveloppersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeveloppersService],
    }).compile();

    service = module.get<DeveloppersService>(DeveloppersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
