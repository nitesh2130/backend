import { Ingredient } from './ingredients.model';
import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table
export class pizzaTable extends Model<pizzaTable> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pizzaBasePrice: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  ingredientPrice: number;
}
