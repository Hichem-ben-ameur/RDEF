import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VisiteursController } from '../visiteurs/visiteurs.controller';
import { VisiteursService } from '../visiteurs/visiteurs.service';
import { VisiteurSchema } from '../visiteurs/schemas/visiteur.schema';
import { DevSchema } from '../developpers/schemas/dev.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Visiteur', schema: VisiteurSchema },{ name: 'Dev', schema: DevSchema }])],
  providers: [UsersService],
  //controllers: [VisiteursController],
  //providers: [VisiteursService],
  exports: [UsersService],
})
export class UsersModule {}