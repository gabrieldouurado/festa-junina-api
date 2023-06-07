import { randomUUID } from 'node:crypto';

export class Food {
  id: string;

  name: string;
  quantity: number;

  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
      this.createdAt = new Date();
    }
  }
}
