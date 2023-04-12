import { Injectable, NotFoundException } from '@nestjs/common';
import { CarsRepository } from '../cars/_repositories/cars.repository';
import { CreateCarsDto } from './dto/create-car.dto';
import { UpdateCarsDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(private carsRepository: CarsRepository) {}

  async create(userId: string, createCarsDto: CreateCarsDto) {
    const cars = await this.carsRepository.create(userId, createCarsDto);
    return cars;
  }

  async findAll() {
    return this.carsRepository.findAll();
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

    return this.carsRepository.update(id, new UpdateCarsDto());
  }

  async delete(id: string) {
    const findCar = await this.carsRepository.findOne(id);
    if (!findCar) {
      throw new NotFoundException('Car not found');
    }
    return this.carsRepository.delete(id);
  }
}
