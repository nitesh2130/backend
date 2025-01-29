import { IsInt, IsNotEmpty, Min, IsArray, IsString } from 'class-validator';

export class OrderDetailsDto {
  @IsInt()
  @IsNotEmpty()
  @Min(0)
  pizzaBasePrice: number;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  ingredientName: string[];
}
