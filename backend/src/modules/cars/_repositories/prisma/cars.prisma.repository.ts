import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarsDto } from '../../dto/create-car.dto';
import { UpdateCarsDto } from '../../dto/update-car.dto';
import { Brand, Car } from '../../entities/car.entity';
import { CarsRepository } from '../cars.repository';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: string, data: CreateCarsDto): Promise<Car> {
    const car = new Car();
    Object.assign(car, {
      ...data,
    });

    const brand = new Brand();
    Object.assign(brand, {
      ...data.brand,
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
        isPromotional: data.isPromotional,
      },
    });

    await this.prisma.brands.create({
      data: { ...brand, carId: newCar.id },
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
      include: { images: true, brand: true },
    });
    return plainToInstance(Car, findCar);
  }

  async findAll(
    page: string,
    limit: string,
    brand: string,
    model: string,
    color: string,
    year: string,
    fuelType: string,
  ): Promise<Car[]> {
    if (brand || model || color || year || fuelType) {
      const cars = await this.prisma.cars.findMany({
        take: parseInt(limit),
        skip: parseInt(page) * parseInt(limit),
        where: {
          brand: { brandName: brand },
          model: model,
          color: color,
          year: year,
          fuelType: fuelType,
        },
        include: {
          images: {
            select: {
              url: true,
            },
          },
          comments: true,
          brand: {
            select: {
              brandName: true,
            },
          },
          user: {
            select: {
              id: true,
              name: true,
              description: true,
              color: true,
            },
          },
        },
      });
      return plainToInstance(Car, cars);
    } else {
      const cars = await this.prisma.cars.findMany({
        include: {
          images: {
            select: {
              url: true,
            },
          },
          comments: true,
          brand: {
            select: {
              brandName: true,
            },
          },
          user: {
            select: {
              id: true,
              name: true,
              description: true,
              color: true,
            },
          },
        },
      });
      return plainToInstance(Car, cars);
    }
  }

  async findOne(id: string): Promise<Car> {
    const car = await this.prisma.cars.findUnique({
      where: {
        id,
      },
      include: {
        images: {
          select: {
            url: true,
          },
        },
        comments: true,
        brand: {
          select: {
            brandName: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            description: true,
            color: true,
          },
        },
      },
    });

    return plainToInstance(Car, car);
  }

  async update(id: string, data: UpdateCarsDto): Promise<Car> {
    await this.prisma.cars.update({
      where: { id },
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
      },
    });

    const cars = await this.prisma.cars.findUnique({
      where: { id },
      include: { images: true },
    });

    for (let i = 0; i < cars.images.length; i++) {
      const element = cars.images[i];
      await this.prisma.carImages.update({
        where: { id: element.id },
        data: {},
      });
    }

    const carsUpdated = await this.prisma.cars.findUnique({
      where: { id },
      include: { images: true },
    });

    return plainToInstance(Car, carsUpdated);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.cars.delete({
      where: { id },
    });
  }
}
