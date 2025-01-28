import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class OrderDto {
  @IsInt()
  PizzaId: number;

  @IsString()
  @IsNotEmpty()
  address: string;
}
