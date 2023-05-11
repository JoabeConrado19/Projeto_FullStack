import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressDto } from './create-user.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Address } from '../entities/user.entity';
import { Transform } from 'class-transformer';
import { hashSync } from 'bcryptjs';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(11)
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  phone: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  birthdate: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  accountType: string;

  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  address: Address;

  @IsNotEmpty()
  @MinLength(6)
  @IsOptional()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
}

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
