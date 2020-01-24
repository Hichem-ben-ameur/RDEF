import { Injectable } from '@nestjs/common';
import { Visiteur } from './interfaces/visiteur.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class VisiteursService {
 
    constructor(@InjectModel('Visiteur') private readonly itemModel: Model<Visiteur>) {}

    async findAll(): Promise<Visiteur[]> {
      return await this.itemModel.find();
    }
  
    async findOne(id: string): Promise<Visiteur> {
      return await this.itemModel.findOne({ _id: id });
    }
    async findOneMail(mail: string): Promise<Visiteur> {
      return this.itemModel.findOne({ mail: mail });
    }
  
    async create(visiteur: Visiteur): Promise<Visiteur> {
      const newItem = new this.itemModel(visiteur);
      return await newItem.save();
    }
  
    async delete(id: string): Promise<Visiteur> {
      return await this.itemModel.findByIdAndRemove(id);
    }
  
    async update(id: string, visiteur: Visiteur): Promise<Visiteur> {
      return await this.itemModel.findByIdAndUpdate(id, visiteur, { new: true });
    }
}
