import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseService } from './database.service';
import { DataBaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { PizzaModule } from './pizza/pizza.module';
import { CartAndOrderModule } from './cart-and-order/cart-and-order.module';

@Module({
  imports: [DataBaseModule, UserModule, PizzaModule, CartAndOrderModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
