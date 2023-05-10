import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarsDto } from '../../dto/create-car.dto';
import { CreateCommentDto } from '../../dto/create-comments.dto';
import { UpdateCarsDto } from '../../dto/update-car.dto';
import { UpdateCommentsDto } from '../../dto/update-comment.dto';
import { Car } from '../../entities/car.entity';
import { Comment } from '../../entities/comment.entity';
import { CarsRepository } from '../cars.repository';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
  constructor(private prisma: PrismaService) { }

  async create(user: string, data: CreateCarsDto): Promise<Car> {
    const car = new Car();
    Object.assign(car, {
      ...data,
    });

    const findBrand = await this.prisma.brands.findUnique({
      where: { brandName: data.brandName },
    });

    if (!findBrand) {
      await this.prisma.brands.create({
        data: { brandName: data.brandName },
      });
    }

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
        brandName: data.brandName,
        isPromotional: data.isPromotional,
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
      include: { images: true, brand: true, comments: true },
    });
    return plainToInstance(Car, findCar);
  }

  async findAll(
    page: string,
    limit: string,
    brand?: string,
    model?: string,
    color?: string,
    year?: string,
    fuelType?: string,
    priceMin?: number,
    priceMax?: number,
    kmMin?: number,
    kmMax?: number,
  ): Promise<Car[]> {
    if (
      brand ||
      model ||
      color ||
      year ||
      fuelType ||
      priceMin ||
      priceMax ||
      kmMin ||
      kmMax
    ) {
      const cars = await this.prisma.cars.findMany({
        take: parseInt(limit),
        skip: parseInt(page) * parseInt(limit),
        where: {
          brand: { brandName: brand },
          model: model,
          color: color,
          year: year,
          fuelType: fuelType,
          price: { lte: Number(priceMax), gte: Number(priceMin) },
          miles: { lte: Number(kmMax), gte: Number(kmMin) },
        },
        include: {
          images: {
            select: {
              url: true,
            },
          },
          comments: {
            select: {
              description: true,
              createdAt: true,
              id: true,
              user: {
                select: {
                  name: true,
                  color: true,
                },
              },
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
          comments: {
            select: {
              id: true,
              description: true,
              createdAt: true,
              user: {
                select: {
                  name: true,
                  color: true,
                },
              },
            },
          },
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
        comments: {
          select: {
            id: true,
            description: true,
            createdAt: true,
            user: {
              select: {
                name: true,
                color: true,
              },
            },
          },
        },
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
            phone: true
          },
        },
      },
    });

    return plainToInstance(Car, car);
  }

  async update(id: string, data: UpdateCarsDto): Promise<Car> {
    const findBrand = await this.prisma.brands.findUnique({
      where: { brandName: data.brandName },
    });

    if (!findBrand) {
      await this.prisma.brands.create({
        data: { brandName: data.brandName },
      });
    }

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
        brandName: data.brandName,
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
      include: { images: true, comments: true },
    });

    return plainToInstance(Car, carsUpdated);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.cars.delete({
      where: { id },
    });
  }

  async createComment(
    carId: string,
    userId: string,
    data: CreateCommentDto,
  ): Promise<Comment> {
    const comment = new Comment();
    Object.assign(comment, {
      ...data,
    });
    const newComment = await this.prisma.comments.create({
      data: { description: data.description, carId: carId, userId: userId },
    });

    return plainToInstance(Comment, newComment);
  }

  async deleteComment(id: string): Promise<void> {
    await this.prisma.comments.delete({
      where: { id },
    });
  }

  async findComment(id: string): Promise<Comment> {
    const findComment = await this.prisma.comments.findUnique({
      where: { id },
    });
    return findComment;
  }

  async updateComment(id: string, data: UpdateCommentsDto): Promise<Comment> {
    const findComment = await this.prisma.comments.findUnique({
      where: { id },
    });

    await this.prisma.comments.update({
      where: { id },
      data: { description: data.description }
    })

    const commentUpdated = await this.prisma.comments.findUnique({
      where: { id },
    });

    return commentUpdated
  }
}
