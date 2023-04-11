import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './_repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const findEmail = await this.usersRepository.findByEmail(
      createUserDto.email,
    );
    const findCpf = await this.usersRepository.findByCpf(createUserDto.cpf);

    if (findEmail) {
      throw new ConflictException('Email já cadastrado');
    }

    if (findCpf) {
      throw new ConflictException('Cpf já cadastrado');
    }

    const user = await this.usersRepository.create(createUserDto);
    return user;
  }

  async findAll() {
    return this.usersRepository.findAll();
  }

  async findOne(id: string) {
    const findUser = await this.usersRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return this.usersRepository.findOne(id);
  }

  async findByEmail(email: string) {
    const findUser = await this.usersRepository.findByEmail(email);
    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.usersRepository.findOne(id);

    const findEmail = await this.usersRepository.findByEmail(
      updateUserDto.email,
    );
    const findCpf = await this.usersRepository.findByCpf(updateUserDto.cpf);

    if (findEmail && findEmail.id != id) {
      throw new ConflictException('Email já cadastrado');
    }

    if (findCpf && findCpf.id != id) {
      throw new ConflictException('Cpf já cadastrado');
    }

    if (!findUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return this.usersRepository.update(id, updateUserDto);
  }

  async delete(id: string) {
    const findUser = await this.usersRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return this.usersRepository.delete(id);
  }
}
