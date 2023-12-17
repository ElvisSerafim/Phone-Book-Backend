import { CreateContactDto } from '../create-contact.dto';
import { ResponseDto } from './response.dto';

export class ResponseCreateContactDto extends ResponseDto {
  contact: CreateContactDto;
}
