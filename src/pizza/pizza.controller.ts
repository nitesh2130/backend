import { PizzaService } from './pizza.service';
import { OrderDetailsDto } from './DTO/orderDetails.dto';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('/pizza')
export class PizzaController {
  constructor(private readonly PizzaService: PizzaService) {} //corectly inject pizzaServiews

  @Post('/select')
  addingrediatnt(
    @Body() orderDetailsDto: OrderDetailsDto,
    @Query() userId: number,
  ) {
    return this.PizzaService.selectIngredient(orderDetailsDto, userId);
  }

  //route for the fetch all ingediants of pizza
  @Get('/')
  getAllIngredient() {
    return this.PizzaService.getAllIngredients();
  }
}
