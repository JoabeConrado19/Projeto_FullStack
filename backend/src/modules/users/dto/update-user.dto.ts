import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressDto, CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
