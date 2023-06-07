import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateFoodUseCase } from 'src/application/useCases/CreateFoodUseCase';
import { GetAllFoodsUseCase } from 'src/application/useCases/GetAllFoodsUseCase';

@Controller('food')
export class FoodController {
  constructor(
    private getAllFoodsUseCase: GetAllFoodsUseCase,
    private createFoodUseCase: CreateFoodUseCase,
  ) {}

  @Get('/')
  async getAllFood() {
    return await this.getAllFoodsUseCase.execute();
  }

  @Post('/create')
  async createFood(@Body() { name, quantity }) {
    await this.createFoodUseCase.execute(name, quantity);
  }
}
