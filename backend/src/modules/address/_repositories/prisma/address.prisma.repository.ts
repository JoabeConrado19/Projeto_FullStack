import { PrismaService } from 'src/prisma/prisma.service';
import { AddressRepository } from '../address.repository';
import { CreateAddressDto } from '../../dto/create-address.dto';
import { Address } from '../../entities/address.entity';
import { plainToInstance } from 'class-transformer';
import { UpdateAddressDto } from '../../dto/update-address.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressPrismaRepository implements AddressRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAddressDto): Promise<Address> {
    const address = new Address();
    Object.assign(address, {
      ...data,
    });
    const newAddress = await this.prisma.address.create({
      data: { ...address },
    });
    return plainToInstance(Address, newAddress);
  }

  async findOne(id: string): Promise<Address> {
    const address = await this.prisma.address.findUnique({
      where: { id },
    });
    return plainToInstance(Address, address);
  }

  async update(id: string, data: UpdateAddressDto): Promise<Address> {
    const address = await this.prisma.address.update({
      where: { id },
      data: { ...data },
    });
    return plainToInstance(Address, address);
  }
}
