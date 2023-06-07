import { Injectable } from '@nestjs/common';
import { FoodRepository } from '../repositories/FoodRepository';

@Injectable()
export class GetAllFoodsUseCase {
  constructor(private foodRepository: FoodRepository) {}

  async execute() {
    return await this.foodRepository.getAll();
  }
}
