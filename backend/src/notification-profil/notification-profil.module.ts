import { Module } from '@nestjs/common';
import { NotificationProfilService } from './notification-profil.service';
import { NotificationProfilController } from './notification-profil.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { NotificationProfileSchema } from './schemas/notification.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Notification_profile', schema: NotificationProfileSchema }])],
  providers: [NotificationProfilService],
  controllers: [NotificationProfilController]
})
export class NotificationProfilModule {}
