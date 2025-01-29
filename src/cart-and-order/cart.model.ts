import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Pizza } from '../pizza/pizza.model';

@Table({
  tableName: 'Cart',
  timestamps: true,
})
export class Cart extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pizzaCount: number;

  @ForeignKey(() => Pizza)
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
    type: DataType.FLOAT,
    allowNull: false,
  })
  totalPrice: number;

  @BelongsTo(() => Pizza)
  pizza: Pizza;
}
