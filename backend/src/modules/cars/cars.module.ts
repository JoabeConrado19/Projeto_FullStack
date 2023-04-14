import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CarsRepository } from './_repositories/cars.repository';
import { CarsPrismaRepository } from './_repositories/prisma/cars.prisma.repository';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [
    CarsService,
    PrismaService,
    {
      provide: CarsRepository,
      useClass: CarsPrismaRepository,
    },
  ],
  exports: [CarsService],
})
export class CarsModule {}
