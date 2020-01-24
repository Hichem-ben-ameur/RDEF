import { Test, TestingModule } from '@nestjs/testing';
import { NotificationProjetService } from './notification-projet.service';

describe('NotificationProjetService', () => {
  let service: NotificationProjetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationProjetService],
    }).compile();

    service = module.get<NotificationProjetService>(NotificationProjetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
