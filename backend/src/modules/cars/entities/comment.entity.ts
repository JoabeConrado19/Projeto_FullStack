import { randomUUID } from 'crypto';

export class Comment {
  readonly id: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  carId: string;
  userId: string;
  constructor() {
    this.id = randomUUID();
  }
}
