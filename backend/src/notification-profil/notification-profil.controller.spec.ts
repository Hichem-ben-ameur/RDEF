import { Test, TestingModule } from '@nestjs/testing';
import { NotificationProfilController } from './notification-profil.controller';

describe('NotificationProfil Controller', () => {
  let controller: NotificationProfilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationProfilController],
    }).compile();

    controller = module.get<NotificationProfilController>(NotificationProfilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
