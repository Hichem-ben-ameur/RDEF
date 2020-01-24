import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  import { CreateProjetDto } from './dto/create-item.dto';
  import { ProjetsService } from './projets.service';
  import { Projet } from './interfaces/projet.interface';

@Controller('projets')
export class ProjetsController {
    constructor(private readonly itemsService: ProjetsService) {}

    @Get()
    findAll(): Promise<Projet[]> {
      return this.itemsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id): Promise<Projet> {
      return this.itemsService.findOne(id);
    }
  
    @Post()
    create(@Body() createProjetDto: CreateProjetDto): Promise<Projet> {
      return this.itemsService.create(createProjetDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id): Promise<Projet> {
      return this.itemsService.delete(id);
    }
  
    @Put(':id')
    update(@Body() updateProjetDto: CreateProjetDto, @Param('id') id): Promise<Projet> {
      return this.itemsService.update(id, updateProjetDto);
    }
}
