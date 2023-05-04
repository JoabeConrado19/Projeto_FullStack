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
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { CarsService } from './cars.service';
import { CreateCarsDto } from './dto/create-car.dto';
import { UpdateCarsDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { CreateCommentDto } from './dto/create-comments.dto';

@Controller('cars')
@ApiTags('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('user/:id')
  @ApiCreatedResponse({ type: Car })
  create(@Body() createCarDto: CreateCarsDto, @Param('id') userId: string) {
    return this.carsService.create(userId, createCarDto);
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiCreatedResponse({ type: Car, isArray: true })
  findAll(
    @Query('page') page = '0',
    @Query('limit') limit = '15',
    @Query('brand') brand?: string,
    @Query('model') model?: string,
    @Query('color') color?: string,
    @Query('year') year?: string,
    @Query('fuelType') fuelType?: string,
  ) {
    return this.carsService.findAll(
      page,
      limit,
      brand,
      model,
      color,
      year,
      fuelType,
    );
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiCreatedResponse({ type: Car })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: Car })
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarsDto) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string) {
    return this.carsService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/comments/:Id')
  createComment(
    @Param('id') carId: string,
    @Param('Id') userId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.carsService.createComment(carId, userId, createCommentDto);
  }

  @Delete('comments/:id')
  @UseGuards(JwtAuthGuard)
  deleteComment(@Param('id') id: string) {
    return this.carsService.deleteComment(id);
  }
}
