import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
 } from '@nestjs/common';
import { CreateDevsDto } from './dto/create-item.dto';
import { DeveloppersService } from './developpers.service';
import { Dev } from './interfaces/dev.interface';

@Controller('developpers')
export class DeveloppersController {
    constructor(private readonly developpersService: DeveloppersService) {}

    @Get()
    findAll(): Promise<Dev[]> {
      return this.developpersService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id): Promise<Dev> {
      return this.developpersService.findOne(id);
    }
    @Get('/mail/:mail')
    findOneMail(@Param('mail') mail): Promise<Dev> {
      return this.developpersService.findOneMail(mail);
    }
  
    @Post('/create')
    create(@Body() CreateDevsDto: CreateDevsDto): Promise<Dev> {
      return this.developpersService.create(CreateDevsDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id): Promise<Dev> {
      return this.developpersService.delete(id);
    }
  
    @Put(':id')
    update(@Body() updateDevDto: CreateDevsDto, @Param('id') id): Promise<Dev> {
      return this.developpersService.update(id, updateDevDto);
    }
}
