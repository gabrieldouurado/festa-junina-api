import { Injectable } from '@nestjs/common';
import { Food } from '../entities/Food';
import { FoodRepository } from '../repositories/FoodRepository';

@Injectable()
export class CreateFoodUseCase {
  constructor(private foodRepository: FoodRepository) {}

  async execute(name: string, quantity: number) {
    const food = new Food();

    Object.assign(food, {
      name,
      quantity,
    });

    await this.foodRepository.create(food);
  }
}
