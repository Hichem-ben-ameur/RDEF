import { Module } from '@nestjs/common';
import { NotificationProjetService } from './notification-projet.service';
import { NotificationProjetController } from './notification-projet.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { NotificationProjetSchema } from './schemas/notification.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Notification_projet', schema: NotificationProjetSchema }])],
  providers: [NotificationProjetService],
  controllers: [NotificationProjetController]
})
export class NotificationProjetModule {}
