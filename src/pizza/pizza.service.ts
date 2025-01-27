import { Injectable } from '@nestjs/common';
import { Ingredient } from './ingredients.model';
import { pizzaTable } from './pizzaTable.model';
import { orderDetailsDto } from './DTO/orderDetails.dto';
import { find, ignoreElements } from 'rxjs';
import { create } from 'domain';

@Injectable()
export class PizzaService {
  pizzaTable: any;
  async selectIngredient(OrderDetailsDto: orderDetailsDto) {
    const { pizzaBasePrice, userId, ingredientPrice, ingredientName } =
      OrderDetailsDto;

    if (ingredientName === null || ingredientName === undefined) {
      throw new Error('ingedient is not available');
    }

    const newObj = {
      pizzaBasePrice: pizzaBasePrice,
      userId: userId,
      ingredientPrice: 0,
      ingredientName: ingredientName,
    };
    //now i am checking this feild is required, but DTO is check this condition also
    // if (!pizzaBasePrice || !userId || !ingredientPrice || ingredientName) {
    //   throw new Error('Please all feijd are required ');
    // }

    let customprice = 0;

    const customizePrice = newObj.ingredientName.map(async (item) => {
      const IngredientOnce = await Ingredient.findOne({
        where: { ingredientItem: item },
      });
      if (IngredientOnce) {
        customprice += IngredientOnce.price;
      }
    });

    newObj.ingredientPrice = customprice;

    const newPizza = new this.pizzaTable.create({
      pizzaBasePrice,
      userId,
      ingredientName,
      customprice,
    });

    return newPizza;
  }

  IngredientData() {}
}
