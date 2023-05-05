import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/modules/users/dto/update-user.dto';
import { Address, User } from 'src/modules/users/entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from '../users.repository';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, {
      ...data,
    });
    const arrayColors = [
      '#e34d8c',
      '#c04277',
      '#7d2a4d',
      '#7000ff',
      '#6200e3',
      '#36007d',
      '#36007d',
      '#2a7d5f',
      '#153d2e',
      '#6100ff',
      '#5700e3',
      '#30007d',
    ];
    const color = arrayColors[Math.floor(Math.random() * arrayColors.length)];

    const newUser = await this.prisma.user.create({
      data: { ...data, address: {}, color: color },
    });

    const address = new Address();
    Object.assign(address, {
      ...data.address,
    });

    await this.prisma.address.create({
      data: { ...address, userId: newUser.id },
    });

    const id = newUser.id;
    const findUser = await this.prisma.user.findFirst({
      where: { id },
      include: { address: true, cars: true, comments: true },
    });
    return plainToInstance(User, findUser);
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      include: { address: true, cars: true, comments: true },
    });
    return plainToInstance(User, users);
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { address: true, cars: true, comments: true },
    });
    return plainToInstance(User, user);
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    if (data.address) {
      await this.prisma.address.update({
        where: { userId: id },
        data: { ...data.address, userId: id },
      });
    } else {
      await this.prisma.user.update({
        where: { id },
        data: { ...data, address: {} },
      });
    }

    const findUser = await this.prisma.user.findFirst({
      where: { id },
      include: { address: true, cars: true, comments: true },
    });
    return plainToInstance(User, findUser);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: { address: true, cars: true, comments: true },
    });
    return user;
  }

  async findByCpf(cpf: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { cpf },
      include: { address: true, cars: true, comments: true },
    });

    return user;
  }
}
