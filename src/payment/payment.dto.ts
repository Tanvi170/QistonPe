import { IsInt, IsPositive } from 'class-validator';

export class CreatePaymentDto {
  @IsInt()
  poId: number;

  @IsPositive()
  amount: number;
}
