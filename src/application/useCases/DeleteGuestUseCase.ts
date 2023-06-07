import { Injectable } from '@nestjs/common';
import { GuestRepository } from '../repositories/GuestRepository';

@Injectable()
export class DeleteGuestUseCase {
  constructor(private guestRepository: GuestRepository) {}

  async execute(id: string) {
    await this.guestRepository.deleteById(id);
  }
}
