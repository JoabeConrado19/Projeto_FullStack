import { CreateUserDto } from '../users/dto/create-user.dto';
import { UpdateUserDto } from '../users/dto/update-user.dto';
import { User } from '../users/entities/user.entity';

export abstract class UsersRepository {
  abstract create(data: CreateUserDto): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract findOne(id: string): Promise<User | undefined>;
  abstract update(id: string, data: UpdateUserDto): Promise<User>;
  abstract delete(id: string): Promise<void>;
  abstract findByEmail(email: string): Promise<User | undefined>;
}
