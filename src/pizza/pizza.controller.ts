import { PizzaService } from './pizza.service';
import { orderDetailsDto } from './DTO/orderDetails.dto';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('/pizza')
export class PizzaController {
  constructor(private readonly PizzaService: PizzaService) {} //corectly inject pizzaServiews

  @Post('/select')
  addingrediatnt(
    @Body() OrderDetailsDto: orderDetailsDto,
    @Query('userId') userId: string,
  ) {
    return this.PizzaService.selectIngredient(OrderDetailsDto);
  }

  //route for the fetch all ingediants of pizza
  @Get('/AllIngredient')
  getAllIngredient() {
    return this.PizzaService.getAllIngredients();
  }
}
