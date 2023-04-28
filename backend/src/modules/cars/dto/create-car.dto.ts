import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
import { CarImages } from '../entities/car.entity';

export class CreateCarsDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  model: string;

  @IsString()
  @ApiProperty()
  year: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  fuelType: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  miles: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  color: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  @ApiProperty()
  price: number;

  @IsBoolean()
  @IsNotEmpty()
  isPromotional: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  imagesUrl: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  isActive: boolean;

  @IsArray()
  @ApiProperty()
  images?: CarImages[] | null;

  @IsObject()
  @ApiProperty()
  brand?: object;
}

export class CreateImagesDto {
  @IsString()
  url: string;
}
