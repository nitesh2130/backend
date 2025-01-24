import { IsInt, IsOptional, Min } from 'class-validator';

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
}
