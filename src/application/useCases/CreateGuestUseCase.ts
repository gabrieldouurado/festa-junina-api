import { Injectable } from '@nestjs/common';
import { GuestRepository } from '../repositories/GuestRepository';
import { Guest } from '../entities/Guest';

@Injectable()
export class CreateGuestUseCase {
  constructor(private guestRepository: GuestRepository) {}

  async execute(name: string, peopleQuantity: number, foodId: string) {
    const guest = new Guest();

    Object.assign(guest, {
      name,
      peopleQuantity,
      foodId,
    });

    await this.guestRepository.create(guest);
  }
}
