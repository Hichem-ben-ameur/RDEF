import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeveloppersController } from './developpers.controller';
import { DeveloppersService } from './developpers.service';
import { DevSchema } from './schemas/dev.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Dev', schema: DevSchema }])],
  controllers: [DeveloppersController],
  providers: [DeveloppersService],
})
export class DevsModule {}
