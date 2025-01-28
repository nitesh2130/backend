import { Optional } from '@nestjs/common';
import { Model } from 'sequelize';
import { Column, DataType, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Order',
  timestamps: true,
})
export class Order extends Model<Order> {
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
    type: DataType.STRING,
    allowNull: false,
  })
  Address: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  status: boolean;
}
