import { Injectable } from '@nestjs/common';
import { Visiteur } from '../visiteurs/interfaces/visiteur.interface';
import { Dev } from '../developpers/interfaces/dev.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(@InjectModel('Visiteur') private readonly itemModel: Model<Visiteur>,@InjectModel('Dev') private readonly itemModel2: Model<Dev>) {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

 /* async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }*/
  async findOneVisiteur(mail: string): Promise<Visiteur> {
    return this.itemModel.findOne({ mail: mail });
  }
  async findOneDev(mail: string): Promise<Dev> {
    return this.itemModel2.findOne({ mail: mail });
  }
}