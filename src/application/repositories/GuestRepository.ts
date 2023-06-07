import { Guest } from '../entities/Guest';

export abstract class GuestRepository {
  abstract create(guest: Guest): Promise<void>;
  abstract deleteById(id: string): Promise<void>;
  abstract updateById(
    id: string,
    name: string,
    peopleQuantity: number,
    foodId: string,
  ): Promise<void>;
  abstract getAllGuest(): Promise<Guest[]>;
}
