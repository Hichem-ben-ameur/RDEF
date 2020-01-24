import { Test, TestingModule } from '@nestjs/testing';
import { VisiteursService } from './visiteurs.service';

describe('VisiteursService', () => {
  let service: VisiteursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisiteursService],
    }).compile();

    service = module.get<VisiteursService>(VisiteursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
