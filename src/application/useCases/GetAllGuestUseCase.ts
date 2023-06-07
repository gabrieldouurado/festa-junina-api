import { Injectable } from '@nestjs/common';
import { GuestRepository } from '../repositories/GuestRepository';

@Injectable()
export class GetAllGuestUseCase {
  constructor(private guestRepository: GuestRepository) {}

  async execute() {
    return await this.guestRepository.getAllGuest();
  }
}
