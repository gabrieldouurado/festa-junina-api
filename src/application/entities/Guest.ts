import { randomUUID } from 'node:crypto';

export class Guest {
  id: string;

  name: string;
  peopleQuantity: number;
  foodId: string;

  createdAt: Date;
  deletedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
      this.createdAt = new Date();
    }
  }
}
