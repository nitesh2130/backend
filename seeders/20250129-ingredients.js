'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Ingredients', [
      {
        ingredientItem: 'Mozzarella Cheese',
        ingredientPrice: 1.50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ingredientItem: 'Pepperoni',
        ingredientPrice: 2.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ingredientItem: 'Mushrooms',
        ingredientPrice: 1.25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ingredientItem: 'Black Olives',
        ingredientPrice: 1.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ingredientItem: 'Green Peppers',
        ingredientPrice: 1.10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ingredientItem: 'Onions',
        ingredientPrice: 0.90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ingredientItem: 'Tomato Sauce',
        ingredientPrice: 1.30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ingredientItem: 'Chicken',
        ingredientPrice: 2.50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ingredientItem: 'Basil',
        ingredientPrice: 0.75,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ingredientItem: 'Jalapenos',
        ingredientPrice: 1.20,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ingredients', null, {});
  }
};
