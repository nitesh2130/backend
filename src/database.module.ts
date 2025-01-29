import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { Pizza } from './pizza/pizza.model';
import { Ingredient } from './pizza/ingredients.model';
import { IngredientInPizza } from './pizza/IngredientInPizza.model';
import { User } from './user/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pizza_password',
      database: 'pizza_db',
      models: [Pizza, Ingredient, User],
      // autoLoadModels: false,
      // models: [User],
      // synchronize: true,
    }),
  ],
})
export class DataBaseModule {}
