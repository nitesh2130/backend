import { PizzaService } from './pizza.service';
import { orderDetailsDto } from './DTO/orderDetails.dto';
import { Body, Controller, Post, Query } from '@nestjs/common';

@Controller('/pizza')
export class PizzaController {
  constructor(private readonly PizzaService: PizzaService) {} //corectly inject pizzaServiews

  @Post('/select')
  addingrediatnt(
    @Body() orderDetails: orderDetailsDto,
    @Query('userId') userId: string,
  ) {
    return this.PizzaService.selectIngredient(orderDetailsDto);
  }
}
