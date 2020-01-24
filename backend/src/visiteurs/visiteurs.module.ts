import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VisiteursController } from './visiteurs.controller';
import { VisiteursService } from './visiteurs.service';
import { VisiteurSchema } from './schemas/visiteur.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Visiteur', schema: VisiteurSchema }])],
  controllers: [VisiteursController],
  providers: [VisiteursService],
})
export class VisiteursModule {}
