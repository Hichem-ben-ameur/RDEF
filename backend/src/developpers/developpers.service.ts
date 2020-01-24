import { Injectable } from '@nestjs/common';
import { Dev } from './interfaces/dev.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DeveloppersService {
    constructor(@InjectModel('Dev') private readonly itemModel: Model<Dev>) {}

    async findAll(): Promise<Dev[]> {
      return await this.itemModel.find();
    }
  
    async findOne(id: string): Promise<Dev> {
      return await this.itemModel.findOne({ _id: id });
    }
    async findOneMail(mail: string): Promise<Dev> {
      return await this.itemModel.findOne({ mail: mail });
    }
  
    async create(dev: Dev): Promise<Dev> {
      const newItem = new this.itemModel(dev);
      return await newItem.save();
    }
  
    async delete(id: string): Promise<Dev> {
      return await this.itemModel.findByIdAndRemove(id);
    }
  
    async update(id: string, dev: Dev): Promise<Dev> {
      return await this.itemModel.findByIdAndUpdate(id, dev, { new: true });
    }
}
