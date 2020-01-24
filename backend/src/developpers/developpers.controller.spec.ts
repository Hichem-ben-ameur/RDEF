import { Test, TestingModule } from '@nestjs/testing';
import { DeveloppersController } from './developpers.controller';

describe('Developpers Controller', () => {
  let controller: DeveloppersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeveloppersController],
    }).compile();

    controller = module.get<DeveloppersController>(DeveloppersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
