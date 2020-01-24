import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjetsController } from './projets.controller';
import { ProjetsService } from './projets.service';
import { ProjetSchema } from './schemas/projet.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Projet', schema: ProjetSchema }])],
  controllers: [ProjetsController],
  providers: [ProjetsService],
})
export class ProjetsModule {}
