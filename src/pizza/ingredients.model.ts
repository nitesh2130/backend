import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Ingredients',
  timestamps: true,
})
export class Ingredient extends Model {
  // @Column({
  //   type: DataType.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  // })
  // id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  ingredientItem: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  ingredientPrice: number;
}
