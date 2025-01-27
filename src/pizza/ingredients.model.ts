import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Ingredient extends Model<Ingredient> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  ingredientItem: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  ingredientPrice: number;
  price: number;
}
