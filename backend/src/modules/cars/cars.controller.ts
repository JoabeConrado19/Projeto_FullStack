import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { CarsService } from './cars.service';
import { CreateCarsDto } from './dto/create-car.dto';
import { UpdateCarsDto } from './dto/update-car.dto';
// Colocar parse uuid pipe em todos ids
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('user/:id')
  create(@Body() createCarDto: CreateCarsDto, @Param('id') userId: string) {
    return this.carsService.create(userId, createCarDto);
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll(@Query('page') page = '0', @Query('limit') limit?: string) {
    return this.carsService.findAll(page, limit);
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarsDto) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string) {
    return this.carsService.delete(id);
  }
}
