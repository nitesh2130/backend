import { Injectable } from '@nestjs/common';
import { orderDetailsDto } from './DTO/orderDetails.dto';

@Injectable()
export class PizzaService {
  selectIngredient(orderDetailsDto: orderDetailsDto) {}
}
