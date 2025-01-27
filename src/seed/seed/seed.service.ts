'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert data into the `pizzaTable`
    await queryInterface.bulkInsert('pizzaTable', [
      {
        ingredientItem: 'Mushroom',
        price: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientItem: 'Pepperoni',
        price: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientItem: 'Cheese',
        price: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientItem: 'Sausage',
        price: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientItem: 'Black olives',
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientItem: 'Green pepper',
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientItem: 'Onion',
        price: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientItem: 'Fresh basil',
        price: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ingredientItem: 'Tomato',
        price: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Delete all rows from the `pizzaTable`
    await queryInterface.bulkDelete('pizzaTable', null, {});
  },
};
