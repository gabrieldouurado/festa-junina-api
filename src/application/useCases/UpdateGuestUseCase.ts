import { Injectable } from '@nestjs/common';
import { GuestRepository } from '../repositories/GuestRepository';

@Injectable()
export class UpdateGuestUseCase {
  constructor(private guestRepository: GuestRepository) {}

  async execute(
    id: string,
    name: string,
    peopleQuantity: number,
    foodId: string,
  ) {
    await this.guestRepository.updateById(id, name, peopleQuantity, foodId);
  }
}
