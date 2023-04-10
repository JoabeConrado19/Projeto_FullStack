import { randomUUID } from 'crypto';

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
