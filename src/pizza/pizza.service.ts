import { PizzaModule } from './pizza.module';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Ingredient } from './ingredients.model';
import { Pizza } from './pizzaTable.model';

import { OrderDetailsDto } from './DTO/orderDetails.dto';
import { find } from 'rxjs';
import { create } from 'domain';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PizzaService {
  constructor(
    @InjectModel(Pizza)
    private readonly PizzaModel: typeof Pizza,
  ) {}
  pizzaTable: any;
  async selectIngredient(orderDetailsDto: OrderDetailsDto, userId: string) {
    const { pizzaBasePrice, ingredientName } = orderDetailsDto;

    console.log(orderDetailsDto);
    console.log(userId);
    if (!pizzaBasePrice || !userId || !ingredientName) {
      throw new BadRequestException('Ingredient data is not available');
    }

    let ingredientPriceTotal = 0;

    ingredientName.map(async (item) => {
      const IngredientOnce = await Ingredient.findOne({
        where: { ingredientItem: item },
      });
      if (IngredientOnce) {
        ingredientPriceTotal += IngredientOnce.ingredientPrice;
      }
    });

    ingredientPriceTotal += pizzaBasePrice;
    console.log(ingredientPriceTotal);
    const newPizza = await new this.pizzaTable.create({
      pizzaBasePrice,
      userId,
      ingredientName,
      ingredientPrice: ingredientPriceTotal,
    });

    return newPizza;
  }

  //to get all ingerdient for the user
  async getAllIngredients() {
    const allIngredients = await Ingredient.findAll();
    if (allIngredients.length === 0) {
      throw new Error('not ingredient have Available');
    }
    return allIngredients;
  }
}
