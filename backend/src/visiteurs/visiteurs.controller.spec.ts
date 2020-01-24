import { Test, TestingModule } from '@nestjs/testing';
import { VisiteursController } from './visiteurs.controller';

describe('Visiteurs Controller', () => {
  let controller: VisiteursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisiteursController],
    }).compile();

    controller = module.get<VisiteursController>(VisiteursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
