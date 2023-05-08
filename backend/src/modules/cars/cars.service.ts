import { Injectable, NotFoundException } from '@nestjs/common';
import { CarsRepository } from '../cars/_repositories/cars.repository';
import { CreateCarsDto } from './dto/create-car.dto';
import { CreateCommentDto } from './dto/create-comments.dto';
import { UpdateCarsDto } from './dto/update-car.dto';
import { UpdateCommentsDto } from './dto/update-comment.dto';

@Injectable()
export class CarsService {
  constructor(private carsRepository: CarsRepository) { }

  async create(userId: string, createCarsDto: CreateCarsDto) {
    const cars = await this.carsRepository.create(userId, createCarsDto);
    return cars;
  }
  async findAll(
    page?: string,
    limit?: string,
    brand?: string,
    model?: string,
    color?: string,
    year?: string,
    fuelType?: string,
    priceMin?: number,
    priceMax?: number,
    kmMin?: number,
    kmMax?: number,
  ) {
    return this.carsRepository.findAll(
      page,
      limit,
      brand,
      model,
      color,
      year,
      fuelType,
      priceMin,
      priceMax,
      kmMin,
      kmMax,
    );
  }

  async findOne(id: string) {
    const findCar = await this.carsRepository.findOne(id);

    if (!findCar) {
      throw new NotFoundException('Car not found');
    }
    return this.carsRepository.findOne(id);
  }

  async update(id: string, updateCarsDto: UpdateCarsDto) {
    const findCar = await this.carsRepository.findOne(id);

    if (!findCar) {
      throw new NotFoundException('Car not found');
    }

    return this.carsRepository.update(id, updateCarsDto);
  }

  async delete(id: string) {
    const findCar = await this.carsRepository.findOne(id);
    if (!findCar) {
      throw new NotFoundException('Car not found');
    }
    return this.carsRepository.delete(id);
  }
  async createComment(
    carId: string,
    userId: string,
    createCommentDto: CreateCommentDto,
  ) {
    const comments = await this.carsRepository.createComment(
      carId,
      userId,
      createCommentDto,
    );
    return comments;
  }

  async deleteComment(id: string) {
    const findComment = await this.carsRepository.findComment(id);
    if (!findComment) {
      throw new NotFoundException('Comment not found');
    }
    return this.carsRepository.deleteComment(id);
  }


  async updateComment(id: string, data: UpdateCommentsDto) {
    const findComment = await this.carsRepository.findComment(id);
    if (!findComment) {
      throw new NotFoundException('Comment not found');
    }
    return this.carsRepository.updateComment(id, data);
  }
}
