import { Module } from '@nestjs/common';
import { CartAndOrderService } from './cart-and-order.service';
import { CartAndOrderController } from './cart-and-order.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Pizza } from 'src/pizza/pizza.model';
import { Order } from './order.model';
import { Cart } from './cart.model';

@Module({
  imports: [SequelizeModule.forFeature([Pizza, Order, Cart])],
  providers: [CartAndOrderService],
  controllers: [CartAndOrderController],
})
export class CartAndOrderModule {}
