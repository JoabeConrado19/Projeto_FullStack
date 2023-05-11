import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  MinLength,
} from 'class-validator';
import { Address } from '../entities/user.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Nome Completo' })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'email@mail.com',
    description:
      'Usar email válido para recebimento da senha se for necessária a recuperação!',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @ApiProperty({ example: '123.456.789-10' })
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '00912345678' })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '01/01/01' })
  birthdate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Usuário para teste' })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Vendedor',
    description: 'Este campo define se o usuário será Anunciante ou Comprador',
  })
  accountType: string;

  @IsObject()
  @IsNotEmpty()
  @ApiProperty({
    example: {
      cep: '15000-000',
      state: 'São Paulo',
      city: 'São Paulo',
      street: 'Rua Teste',
      number: 1,
      complement: 'Se houver',
    },
  })
  address: Address;

  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({ example: 'senhateste123' })
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
}

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  cep: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  state: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  street: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  number: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  complement: string;
}
