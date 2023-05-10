import { CreateCarsDto } from '../dto/create-car.dto';
import { CreateCommentDto } from '../dto/create-comments.dto';
import { UpdateCarsDto } from '../dto/update-car.dto';
import { UpdateCommentsDto } from '../dto/update-comment.dto';
import { Car } from '../entities/car.entity';
import { Comment } from '../entities/comment.entity';

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
    priceMin?: number,
    priceMax?: number,
    kmMin?: number,
    kmMax?: number,
  ): Promise<Car[]>;
  abstract findOne(id: string): Promise<Car | undefined>;
  abstract update(id: string, data: UpdateCarsDto): Promise<Car>;
  abstract delete(id: string): Promise<void>;
  abstract createComment(
    carId: string,
    userId: string,
    data: CreateCommentDto,
  ): Promise<Comment>;
  abstract deleteComment(id: string): Promise<void>;
  abstract findComment(id: string): Promise<Comment>;
  abstract updateComment(id: string, data: UpdateCommentsDto): Promise<Comment>
}
