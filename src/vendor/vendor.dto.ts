import { IsEmail, IsIn, IsNotEmpty } from 'class-validator';

export class CreateVendorDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsIn([7, 15, 30, 45, 60])
  paymentTerms: number;
}
