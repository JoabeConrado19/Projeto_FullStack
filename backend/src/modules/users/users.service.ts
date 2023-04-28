import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { hashSync } from 'bcryptjs';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailService } from 'src/utils/mail.service';
import { UsersRepository } from './_repositories/users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private prisma: PrismaService,
    private mailService: MailService,
  ) {}

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

    if (!updateUserDto.address) {
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

  async sendEmailPassword(email: string) {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const resetToken = randomUUID();

    await this.prisma.user.update({
      where: { email },
      data: { reset: resetToken },
    });

    const resetPasswordTemplate = this.mailService.resetPassword(
      email,
      user.name,
      resetToken,
    );
    await this.mailService.sendEmail(resetPasswordTemplate);
  }

  async resetPassword(password: string, resetToken: string) {
    const user = await this.prisma.user.findFirst({
      where: { reset: resetToken },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashSync(password, 10),
        reset: null,
      },
    });
  }
}
