import { Test, TestingModule } from '@nestjs/testing';
import { NotificationProjetController } from './notification-projet.controller';

describe('NotificationProjet Controller', () => {
  let controller: NotificationProjetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationProjetController],
    }).compile();

    controller = module.get<NotificationProjetController>(NotificationProjetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
