import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
 } from '@nestjs/common';
import { CreateNotificationsProjetsDto } from './dto/create-item.dto';
import { NotificationProjetService } from './notification-projet.service';
import { Notification_projet } from './interfaces/notification.interface';

@Controller('notification-projet')
export class NotificationProjetController {
    constructor(private readonly notificationProjetService: NotificationProjetService) {}

    @Get(':id')
    findAll(@Param('id') id): Promise<CreateNotificationsProjetsDto[]> {
      return this.notificationProjetService.findAll(id);
    }
    @Get()
    findAll2(): Promise<CreateNotificationsProjetsDto[]> {
      return this.notificationProjetService.findAll2();
    }
    @Post()
    finds(@Param('id_dev') id_dev,@Param('id_projet') id_projet): Promise<CreateNotificationsProjetsDto[]> {
      return this.notificationProjetService.finds(id_dev,id_projet);
    }
    @Post('/create')
    create(@Body() createNotificationsProjetsDto: CreateNotificationsProjetsDto): Promise<Notification_projet> {
      return this.notificationProjetService.create(createNotificationsProjetsDto);
    }
    @Delete(':id')
    delete(@Param('id') id): Promise<CreateNotificationsProjetsDto> {
      return this.notificationProjetService.delete(id);
    }
}
