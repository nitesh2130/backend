import { Ingredient } from './ingredients.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PizzaService } from './pizza.service';
import { PizzaController } from './pizza.controller';
import { OrderDetailsDto } from './DTO/orderDetails.dto';
import { Pizza } from './pizza.model';

@Module({
  imports: [SequelizeModule.forFeature([Ingredient, Pizza])],
  providers: [PizzaService],
  controllers: [PizzaController],
})
export class PizzaModule {}
