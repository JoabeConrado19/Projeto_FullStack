import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  cpf: string;
  birthdate: Date;
  description: string;
  accountType: string;
  profileImage: string;
  readonly createdAt: Date;
  readonly addressId: string;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
