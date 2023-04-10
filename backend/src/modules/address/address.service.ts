import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressRepository } from './_repositories/address.repository';

@Injectable()
export class AddressService {
  constructor(private addressRepository: AddressRepository) {}

  async create(createAddressDto: CreateAddressDto) {
    const address = await this.addressRepository.create(createAddressDto);
    return address;
  }

  async findOne(id: string) {
    const findAddress = await this.addressRepository.findOne(id);

    if (!findAddress) {
      throw new NotFoundException('Address not found');
    }

    return findAddress;
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    const findAddress = await this.addressRepository.findOne(id);

    if (!findAddress) {
      throw new NotFoundException('Address not found');
    }

    return this.addressRepository.update(id, updateAddressDto);
  }
}
