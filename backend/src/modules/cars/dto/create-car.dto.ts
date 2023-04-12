import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { CarImages } from '../entities/car.entity';

export class CreateCarsDto {
  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  year: string;

  @IsString()
  @IsNotEmpty()
  fuelType: string;

  @IsString()
  @IsNotEmpty()
  miles: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  imagesUrl: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @IsArray()
  images?: CarImages[] | null;
}

export class CreateImagesDto {
  @IsString()
  url: string;
}
