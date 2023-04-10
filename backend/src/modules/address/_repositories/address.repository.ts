import { CreateAddressDto } from '../dto/create-address.dto';
import { UpdateAddressDto } from '../dto/update-address.dto';
import { Address } from '../entities/address.entity';

export abstract class AddressRepository {
  abstract create(data: CreateAddressDto): Promise<Address>;
  abstract findOne(id: string): Promise<Address | undefined>;
  abstract update(id: string, data: UpdateAddressDto): Promise<Address>;
}
