import { randomUUID } from 'crypto';
import { User } from 'src/modules/users/entities/user.entity';

export class Car {
  readonly id: string;
  model: string;
  year: string;
  fuelType: string;
  miles: string;
  color: string;
  description: string;
  price: string;
  imagesUrl: string;
  isActive: boolean;
  createdAt: Date;
  userId: string;
  images: CarImages[];
  user: User

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
