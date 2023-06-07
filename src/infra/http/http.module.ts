import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GuestController } from './controllers/GuestController';
import { FoodController } from './controllers/FoodController';
import { DeleteGuestUseCase } from 'src/application/useCases/DeleteGuestUseCase';
import { CreateGuestUseCase } from 'src/application/useCases/CreateGuestUseCase';
import { GetAllFoodsUseCase } from 'src/application/useCases/GetAllFoodsUseCase';
import { GetAllGuestUseCase } from 'src/application/useCases/GetAllGuestUseCase';
import { CreateFoodUseCase } from 'src/application/useCases/CreateFoodUseCase';
import { UpdateGuestUseCase } from 'src/application/useCases/UpdateGuestUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [GuestController, FoodController],
  providers: [
    CreateGuestUseCase,
    DeleteGuestUseCase,
    GetAllGuestUseCase,
    GetAllFoodsUseCase,
    CreateFoodUseCase,
    UpdateGuestUseCase,
  ],
})
export class HttpModule {}
