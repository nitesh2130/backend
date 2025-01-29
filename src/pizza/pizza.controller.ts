import { PizzaService } from './pizza.service';
import { OrderDetailsDto } from './DTO/orderDetails.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

@Controller('pizza')
export class PizzaController {
  constructor(private readonly PizzaService: PizzaService) {} //corectly inject pizzaServiews

  //@Post('/select')

  //route for the fetch all ingediants of pizza
  @Get()
  getAllIngredient() {
    return this.PizzaService.getAllIngredients();
  }

  @Post('select/:userId')
  addingredient(
    @Body() orderDetailsDto: OrderDetailsDto,
    @Param('userId') userId: string,
  ) {
    const parsedUserId = parseInt(userId, 10);
    console.log(typeof parsedUserId);
    console.log(userId, ' this is userId');

    return this.PizzaService.selectIngredient(orderDetailsDto, parsedUserId);
  }
}
