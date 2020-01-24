import { Injectable } from '@nestjs/common';
import { Notification_profile } from './interfaces/notification.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NotificationProfilService {
    constructor(@InjectModel('Notification_profile') private readonly itemModel: Model<Notification_profile>) {} 
    async findAll(id: string): Promise<Notification_profile[]> {
        return await this.itemModel.find({id_visiteur: id});
      }
      async findAll2(): Promise<Notification_profile[]> {
        return await this.itemModel.find();
      }
      async create(notification_profile: Notification_profile): Promise<Notification_profile> {
        const newItem = new this.itemModel(notification_profile);
        return await newItem.save();
      }
}
