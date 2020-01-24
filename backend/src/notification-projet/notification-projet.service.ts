import { Injectable } from '@nestjs/common';
import { Notification_projet } from './interfaces/notification.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NotificationProjetService {
    constructor(@InjectModel('Notification_projet') private readonly itemModel: Model<Notification_projet>) {} 
    async findAll(id: string): Promise<Notification_projet[]> {
        return await this.itemModel.find({id_visiteur: id});
      }
      async findAll2(): Promise<Notification_projet[]> {
        return await this.itemModel.find();
      }
      async finds(id_dev: string,id_projet: string,): Promise<Notification_projet[]> {
        return await this.itemModel.find({id_developpeur: id_dev,id_projet:id_projet});
      }
      async create(notification_projet: Notification_projet): Promise<Notification_projet> {
        const newItem = new this.itemModel(notification_projet);
        return await newItem.save();
      }
      async delete(id: string): Promise<Notification_projet> {
        return await this.itemModel.findByIdAndRemove(id);
      }
}
