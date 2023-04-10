import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsObject,
} from 'class-validator';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { Address } from 'src/modules/address/entities/address.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  cpf: string;

  @IsString()
  @IsNotEmpty()
  birthdate: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  accountType: string;

  @IsString()
  @IsNotEmpty()
  profileImage: string;

  @IsObject()
  @IsNotEmpty()
  address: Address;

  @IsNotEmpty()
  @MinLength(6)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
}
