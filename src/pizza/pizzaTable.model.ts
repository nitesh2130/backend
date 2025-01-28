import { STRING } from 'sequelize';
import { Ingredient } from './ingredients.model';
import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'Pizza',
  timestamps: true,
})
export class Pizza extends Model<Pizza> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pizzaBasePrice: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  userId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  ingredientPrice: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
  })
  ingredientName: string[];
}
