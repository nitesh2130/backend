import { BadRequestException, Injectable } from '@nestjs/common';
import { Ingredient } from './ingredients.model';
import { Pizza } from './pizza.model';
import { OrderDetailsDto } from './DTO/orderDetails.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PizzaService {
  constructor(
    @InjectModel(Pizza)
    private readonly pizzaModel: typeof Pizza,
    @InjectModel(Ingredient)
    private readonly ingredientModel: typeof Ingredient,
  ) {}

  async selectIngredient(
    orderDetailsDto: OrderDetailsDto,
    parsedUserId: number,
  ) {
    const { pizzaBasePrice, ingredientName } = orderDetailsDto;
    console.log(parsedUserId);

    if (!pizzaBasePrice || !parsedUserId || !ingredientName) {
      throw new BadRequestException('Ingredient data is not available');
    }

    let totalPrice = pizzaBasePrice;

    // Use Promise.all to handle async operations properly
    const ingredients = await Promise.all(
      ingredientName.map(async (item) => {
        //console.log(item, ' this  is item');
        const ingredient = await this.ingredientModel.findOne({
          where: { ingredientItem: item },
        });
        console.log(ingredient, 'this is ingredient');
        if (ingredient) {
          totalPrice += ingredient.ingredientPrice;
        }
        return ingredient;
      }),
    );

    // Create new pizza with total price
    const newPizza = await this.pizzaModel.create({
      pizzaBasePrice,
      parsedUserId,
      ingredientName,
      ingredientPrice: totalPrice,
    });

    return newPizza;
  }

  async getAllIngredients() {
    const allIngredients = await this.ingredientModel.findAll();
    if (allIngredients.length === 0) {
      throw new BadRequestException('No ingredients are available');
    }
    return allIngredients;
  }
}
