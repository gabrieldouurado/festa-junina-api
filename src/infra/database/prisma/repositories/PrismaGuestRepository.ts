import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { GuestRepository } from 'src/application/repositories/GuestRepository';
import { Guest } from 'src/application/entities/Guest';

@Injectable()
export class PrismaGuestRepository implements GuestRepository {
  constructor(private prisma: PrismaService) {}

  async updateById(
    id: string,
    name: string,
    peopleQuantity: number,
    foodId: string,
  ): Promise<void> {
    const currentGuest = await this.prisma.guest.findFirst({
      where: {
        id,
      },
    });

    currentGuest.name = name;
    currentGuest.peopleQuantity = peopleQuantity;
    currentGuest.foodId = foodId;

    await this.prisma.guest.update({
      data: currentGuest,
      where: {
        id,
      },
    });
  }

  async getAllGuest(): Promise<Guest[]> {
    return await this.prisma.guest.findMany({
      where: {
        deletedAt: null,
      },
    });
  }

  async create(guest: Guest): Promise<void> {
    await this.prisma.guest.create({ data: guest });
  }

  async deleteById(id: string): Promise<void> {
    const currentGuest = await this.prisma.guest.findFirst({
      where: {
        id,
      },
    });

    currentGuest.deletedAt = new Date();

    await this.prisma.guest.update({
      data: currentGuest,
      where: {
        id,
      },
    });
  }
}
