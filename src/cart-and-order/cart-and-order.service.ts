import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Pizza } from '../pizza/pizza.model';
import { Cart } from './cart.model';
import { CartDto } from './DTO/cart.dto';

@Injectable()
export class CartAndOrderService {
  constructor(
    @InjectModel(Cart)
    private readonly cartModel: typeof Cart,
    @InjectModel(Pizza)
    private readonly pizzaModel: typeof Pizza,
  ) {}

  async addToCart(cartDto: CartDto, userId: number) {
    const { pizzaCount, pizzaId } = cartDto;

    const pizzaOnce = await this.pizzaModel.findByPk(pizzaId);
    if (!pizzaOnce) {
      throw new BadRequestException('The pizza does not exist');
    }

    // Calculate total price based on pizza's total price and quantity
    const totalPrice = pizzaCount * pizzaOnce.totalPrice;

    const newCart = await this.cartModel.create({
      pizzaCount,
      pizzaId,
      userId,
      totalPrice,
    });

    return newCart;
  }

  async viewAllCartItems(userId: number) {
    const allCartItems = await this.cartModel.findAll({
      where: { userId },
      include: [{ model: Pizza }],
    });

    if (!allCartItems.length) {
      throw new BadRequestException('Cart is empty for this user');
    }

    return allCartItems;
  }

  //place order to the user
  placeOrder() {}

  //Veiw Order
  AllOrder() {}
}
