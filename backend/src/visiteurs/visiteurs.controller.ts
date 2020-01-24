import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
 } from '@nestjs/common';
import { CreateVisiteursDto } from './dto/create-item.dto';
import { VisiteursService } from './visiteurs.service';
import { Visiteur } from './interfaces/visiteur.interface';

@Controller('visiteurs')
export class VisiteursController {
    constructor(private readonly visiteursService: VisiteursService) {}

    @Get()
    findAll(): Promise<Visiteur[]> {
      return this.visiteursService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id): Promise<Visiteur> {
      return this.visiteursService.findOne(id);
    }
    @Get('/mail/:mail')
    findOneMail(@Param('mail') mail): Promise<Visiteur> {
      return this.visiteursService.findOneMail(mail);
    }
    @Post('/create')
    create(@Body() CreateDevsDto: CreateVisiteursDto): Promise<Visiteur> {
      return this.visiteursService.create(CreateDevsDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id): Promise<Visiteur> {
      return this.visiteursService.delete(id);
    }
  
    @Put(':id')
    update(@Body() updateVisiteurDto: CreateVisiteursDto, @Param('id') id): Promise<Visiteur> {
      return this.visiteursService.update(id, updateVisiteurDto);
    }
}
