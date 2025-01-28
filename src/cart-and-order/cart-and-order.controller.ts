import { Body, Controller, Post, Query, Get } from '@nestjs/common';
import { isPort } from 'class-validator';
import { CartAndOrderService } from './cart-and-order.service';
import { CartDto } from './DTO/cart.dto';
import { OrderDto } from './DTO/order.dto';

@Controller('cart-and-order')
export class CartAndOrderController {
  [x: string]: any;

  // add item in the Cart
  @Post('add_cart')
  addCart(@Body() cartDto: CartDto, @Query('userId') userId: number) {
    return this.CartAndOrderService.addToCart(cartDto, userId);
  }

  //get all itemof the Cart

  //veiw only one cart respect to the user
  @Get('veiw_cart')
  getCart(@Query('userId') userId: number) {
    return this.CartAndOrderService.veiwAllCartItem(userId);
  }

  //place the order
  @Post('order')
  placeOrder(@Body() orderDto: OrderDto, @Query('userId') userId: number) {
    return this.CartAndOrderService.placeOrder(orderDto, userId);
  }

  //veiw the all order of user
  @Get('veiw_order')
  getOrder(@Query('userId') userId: number) {
    return this.CartAndOrderService.AllOrder(userId);
  }
}
