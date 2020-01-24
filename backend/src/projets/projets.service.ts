import { Injectable } from '@nestjs/common';
import { Projet } from './interfaces/projet.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProjetsService {
    constructor(@InjectModel('Projet') private readonly itemModel: Model<Projet>) {}

    async findAll(): Promise<Projet[]> {
      return await this.itemModel.find();
    }
  
    async findOne(id: string): Promise<Projet> {
      return await this.itemModel.findOne({ _id: id });
    }
  
    async create(projet: Projet): Promise<Projet> {
      const newItem = new this.itemModel(projet);
      return await newItem.save();
    }
  
    async delete(id: string): Promise<Projet> {
      return await this.itemModel.findByIdAndRemove(id);
    }
  
    async update(id: string, projet: Projet): Promise<Projet> {
      return await this.itemModel.findByIdAndUpdate(id, projet, { new: true });
    }
}
