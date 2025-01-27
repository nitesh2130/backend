import { IsInt, IsOptional, Min, IsArray, IsString } from 'class-validator';
//import { IsArray } from 'sequelize-typescript';

export class orderDetailsDto {
  @IsInt()
  @Min(0)
  pizzaBasePrice: number;

  @IsInt()
  userId: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  ingredientPrice?: number; // Optional with a default value of 0

  @IsArray()
  @IsString({ each: true }) // it is check each item in the array is a string
  @IsOptional()
  ingredientName?: string[];
}
