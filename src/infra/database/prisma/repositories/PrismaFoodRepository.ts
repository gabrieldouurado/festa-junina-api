import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { FoodRepository } from 'src/application/repositories/FoodRepository';
import { Food } from 'src/application/entities/Food';

@Injectable()
export class PrismaFoodRepository implements FoodRepository {
  constructor(private prisma: PrismaService) {}

  async create(food: Food): Promise<void> {
    await this.prisma.food.create({ data: food });
  }

  async getAll(): Promise<Food[]> {
    return await this.prisma.food.findMany();
  }
}
