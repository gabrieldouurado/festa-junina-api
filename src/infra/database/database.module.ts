import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { GuestRepository } from 'src/application/repositories/GuestRepository';
import { PrismaGuestRepository } from './prisma/repositories/PrismaGuestRepository';
import { FoodRepository } from 'src/application/repositories/FoodRepository';
import { PrismaFoodRepository } from './prisma/repositories/PrismaFoodRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: GuestRepository,
      useClass: PrismaGuestRepository,
    },
    {
      provide: FoodRepository,
      useClass: PrismaFoodRepository,
    },
  ],
  exports: [GuestRepository, FoodRepository],
})
export class DatabaseModule {}
