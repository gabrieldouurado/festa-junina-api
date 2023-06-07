import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Get,
  Put,
} from '@nestjs/common';
import { CreateGuestUseCase } from 'src/application/useCases/CreateGuestUseCase';
import { DeleteGuestUseCase } from 'src/application/useCases/DeleteGuestUseCase';
import { GetAllGuestUseCase } from 'src/application/useCases/GetAllGuestUseCase';
import { UpdateGuestUseCase } from 'src/application/useCases/UpdateGuestUseCase';

@Controller('guest')
export class GuestController {
  constructor(
    private createGuestUseCase: CreateGuestUseCase,
    private deleteGuestUseCase: DeleteGuestUseCase,
    private getAllGuestUseCase: GetAllGuestUseCase,
    private updateGuestUseCase: UpdateGuestUseCase,
  ) {}

  @Get('/')
  async getAllGest() {
    return this.getAllGuestUseCase.execute();
  }

  @Post('/create')
  async createGuest(@Body() { name, peopleQuantity, foodId }) {
    await this.createGuestUseCase.execute(name, peopleQuantity, foodId);
  }

  @Put('/')
  async updateGuestById(@Body() { id, name, peopleQuantity, foodId }) {
    await this.updateGuestUseCase.execute(id, name, peopleQuantity, foodId);
  }

  @Delete('/delete/:id')
  async deleteGuestById(@Param('id') id) {
    await this.deleteGuestUseCase.execute(id);
  }
}
