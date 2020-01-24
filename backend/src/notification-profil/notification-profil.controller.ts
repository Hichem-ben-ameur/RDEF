import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
 } from '@nestjs/common';
import { CreateNotificationsProfilesDto } from './dto/create-item.dto';
import { NotificationProfilService } from './notification-profil.service';
import { Notification_profile } from './interfaces/notification.interface';

@Controller('notification-profil')
export class NotificationProfilController {
    constructor(private readonly notificationProfilService: NotificationProfilService) {}

    @Get(':id')
    findAll(@Param('id') id): Promise<CreateNotificationsProfilesDto[]> {
      return this.notificationProfilService.findAll(id);
    }
    @Get()
    findAll2(): Promise<CreateNotificationsProfilesDto[]> {
      return this.notificationProfilService.findAll2();
    }

    @Post('/create')
    create(@Body() createNotificationsProfilesDto: CreateNotificationsProfilesDto): Promise<Notification_profile> {
      return this.notificationProfilService.create(createNotificationsProfilesDto);
    }
}
