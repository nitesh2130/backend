import { Ingredient } from './../pizza/ingredients.model';
import { Pizza } from 'src/pizza/pizzaTable.model';
import { CartDto } from './DTO/cart.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Cart } from './cart.model';

@Injectable()
export class CartAndOrderService {
  Cart: any;
  //add pizza in the Cart
  async addToCart(cartDto: CartDto, userId: any) {
    const { pizzaCount, pizzaId } = cartDto;
    let totalPrice = 0;

    const pizzaOnce = await Pizza.findByPk(pizzaId);

    if (!pizzaOnce) {
      return new BadRequestException('The pizza does not exist');
    }

    if (pizzaCount > 1) {
      totalPrice = pizzaCount * pizzaOnce.ingredientPrice;
    }

    const newCart = await new this.Cart.create({
      pizzaCount,
      pizzaId,
      userId,
      totalPrice,
    });

    return newCart;
  }

  //Veiw all item of Cart
  veiwAllCartItem() {}

  //place order to the user
  placeOrder() {}

  //Veiw Order
  AllOrder() {}
}
