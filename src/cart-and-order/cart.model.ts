// import { Model } from "sequelize";
import {
  AllowNull,
  Model,
  Column,
  Table,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'Cart',
  timestamps: true,
})
export class Cart extends Model<Cart> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pizzaCount: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pizzaId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  totalPrice: number;
}
