import { PartialType } from '@nestjs/mapped-types';
import { CreateCarsDto } from './create-car.dto';

export class UpdateCarsDto extends PartialType(CreateCarsDto) {}
