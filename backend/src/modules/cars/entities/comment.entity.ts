import { randomUUID } from 'crypto';

export class Comment {
  readonly id: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  constructor() {
    this.id = randomUUID();
  }
}
