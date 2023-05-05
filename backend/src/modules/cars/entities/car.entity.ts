import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class UserCar {
  id: string;
  name: string;
  email: string;
  cpf: string;
  birthdate: Date;
  description: string;
  accountType: string;
  profileImage: string;
  createdAt: Date;

  @Exclude()
  password: string;
}

export class Car {
  readonly id: string;
  model: string;
  year: string;
  fuelType: string;
  miles: string;
  color: string;
  description: string;
  price: number;
  isPromotional: boolean;
  imagesUrl: string;
  isActive: boolean;
  createdAt: Date;
  userId: string;
  images: CarImages[];
  user: UserCar;

  constructor() {
    this.id = randomUUID();
  }
}

export class CarImages {
  readonly id: string;
  url: string;
  carId: string;

  constructor() {
    this.id = randomUUID();
  }
}

export class Brand {
  readonly id: string;
  brandName: string;

  constructor() {
    this.id = randomUUID();
  }
}
