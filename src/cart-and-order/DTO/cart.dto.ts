import { IsInt } from 'class-validator';

export class CartDto {
  @IsInt()
  pizzaId: number;

  @IsInt()
  pizzaCount: number;
}
