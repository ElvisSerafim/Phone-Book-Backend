import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty({
    message: 'Fill up the Contact first name!',
  })
  firstName: string;

  @IsNotEmpty({
    message: 'Fill up the Contact last name!',
  })
  lastName: string;

  @MinLength(10, {
    message: 'Phone Number should have 10 numbers!',
  })
  phoneNumber: string;
}
