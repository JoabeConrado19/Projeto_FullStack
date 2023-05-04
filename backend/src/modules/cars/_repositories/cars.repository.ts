import { CreateCarsDto } from '../dto/create-car.dto';
import { UpdateCarsDto } from '../dto/update-car.dto';
import { Car } from '../entities/car.entity';

export abstract class CarsRepository {
  abstract create(userId: string, data: CreateCarsDto): Promise<Car>;
  abstract findAll(
    page: string,
    limit: string,
    brand?: string,
    model?: string,
    color?: string,
    year?: string,
    fuelType?: string,
    priceMin?: string,
    priceMax?: string,
  ): Promise<Car[]>;
  abstract findOne(id: string): Promise<Car | undefined>;
  abstract update(id: string, data: UpdateCarsDto): Promise<Car>;
  abstract delete(id: string): Promise<void>;
}
