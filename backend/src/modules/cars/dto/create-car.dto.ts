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
  @ApiProperty({ example: "TIGUAN Allspac Comf 250 TSI 1.4 Flex" })
  model: string;

  @IsString()
  @ApiProperty({ example: "2022" })
  year: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "Flex" })
  fuelType: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "10.000" })
  miles: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "Branco" })
  color: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "Carro novo, unico dono" })
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  @ApiProperty({ example: "R$ 193.812,00" })
  price: number;

  @IsBoolean()
  @IsNotEmpty()
  isPromotional: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false, example: "https://1.bp.blogspot.com/-QRLbIFrSrkg/YK-edpvGwvI/AAAAAAAAwh8/VVYyHmTqo0kl68IeLDF3nECX2GcusziWQCLcBGAsYHQ/s2048/VW-Tiguan-AllSpace-2022%2B%25282%2529.jpg" })
  imagesUrl: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  isActive: boolean;

  @IsArray()
  @ApiProperty()
  images?: CarImages[] | null;

  @IsObject()
  @ApiProperty({ example: "Volkswagen" })
  brand?: object;
}

export class CreateImagesDto {
  @IsString()
  url: string;
}
