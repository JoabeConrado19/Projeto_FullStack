import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  phone?: string;
  cpf: string;
  birthdate: string;
  description: string;
  accountType: string;
  color: string;
  readonly createdAt: Date;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}

export class Address {
  readonly id: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
