import { IsInt, IsPositive } from 'class-validator';

export class CreatePoDto {
  @IsInt()
  vendorId: number;

  @IsPositive()
  totalAmount: number;
}
