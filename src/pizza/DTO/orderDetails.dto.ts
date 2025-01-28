import { IsInt, IsOptional, Min, IsArray, IsString } from 'class-validator';
//import { IsArray } from 'sequelize-typescript';

export class OrderDetailsDto {
  @IsInt()
  @Min(0)
  pizzaBasePrice: number;

  // @IsInt()
  // userId: number;

  @IsArray()
  @IsString({ each: true }) // it is check each item in the array is a string
  @IsOptional()
  ingredientName: string[];
}
