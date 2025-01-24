import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class IngredientInPizza extends Model<IngredientInPizza> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pizzaId: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ingredientId: string;
}
