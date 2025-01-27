
import { pizzaTable } from '../src/pizza/ingredients.model';

export const up = async () => {
  await User.bulkCreate([
    { ingredientItem: 'Mushroom', price: 20 },
    { ingredientItem: 'Pepperoni', price: 15 },
    { ingredientItem: 'Cheese', price: 25 },
    { ingredientItem: 'Sausage', price: 12 },
    { ingredientItem: 'Black olives', price: 10 },
    { ingredientItem: 'Green pepper', price: 10 },
    { ingredientItem: 'Onion', price: 12 },
    { ingredientItem: 'Fresh basil', price: 20 },
    { ingredientItem: 'Tomato', price: 15 },
  ]);
};

export const down = async () => {
  await User.destroy({ where: {} });
};
