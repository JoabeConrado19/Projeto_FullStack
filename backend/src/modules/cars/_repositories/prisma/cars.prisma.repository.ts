import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarsDto } from '../../dto/create-car.dto';
import { UpdateCarsDto } from '../../dto/update-car.dto';
import { CarsRepository } from '../cars.repository';
import { plainToInstance } from 'class-transformer';
import { Car } from '../../entities/car.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: string, data: CreateCarsDto): Promise<Car> {
    const car = new Car();
    const { ...rest } = data;
    Object.assign(car, {
      ...rest,
    });

    const newCar = await this.prisma.cars.create({
      data: {
        color: data.color,
        description: data.description,
        fuelType: data.fuelType,
        imagesUrl: data.imagesUrl,
        isActive: data.isActive,
        miles: data.miles,
        model: data.model,
        price: data.price,
        year: data.year,
        userId: user,
      },
    });

    if (data.images.length) {
      for (let i = 0; i < data.images.length; i++) {
        await this.prisma.carImages.create({
          data: { ...data.images[i], carId: newCar.id },
        });
      }
    }

    const id = newCar.id;
    const findCar = await this.prisma.cars.findFirst({
      where: { id },
      include: { images: true },
    });
    return plainToInstance(Car, findCar);
  }

  findAll(): Promise<Car[]> {
    throw new Error('Method not implemented.');
  }

  findOne(id: string): Promise<Car> {
    throw new Error('Method not implemented.');
  }

  update(id: string, data: UpdateCarsDto): Promise<Car> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    await this.prisma.cars.delete({
      where: { id },
    });
  }
}
