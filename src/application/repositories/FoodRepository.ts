import { Food } from '../entities/Food';

export abstract class FoodRepository {
  abstract getAll(): Promise<Food[]>;
  abstract create(food: Food): Promise<void>;
}
