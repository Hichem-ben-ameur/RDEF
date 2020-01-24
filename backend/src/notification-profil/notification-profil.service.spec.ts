import { Test, TestingModule } from '@nestjs/testing';
import { NotificationProfilService } from './notification-profil.service';

describe('NotificationProfilService', () => {
  let service: NotificationProfilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationProfilService],
    }).compile();

    service = module.get<NotificationProfilService>(NotificationProfilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
