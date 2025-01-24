'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IngredientInPizzas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pizzaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ingredientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('IngredientInPizzas');
  },
};
