import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from '../utils/types';
import { CreateContactDto } from './dto/create-contact.dto';
import { ResponseCreateContactDto } from './dto/responses/response-create-contact.dto';
import { EditContactDto } from './dto/edit-contact.dto';
import { DeleteContactDto } from './dto/delete-contact.dto';
import { ResponseContactsDto } from './dto/responses/response-contacts-dto';

@Controller('/contacts')
export class ContactController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  getContacts(@Query('page') page: number): ResponseContactsDto {
    return this.contactsService.getContacts(page);
  }

  @Post('/createContact')
  createContact(
    @Body(ValidationPipe) createContactDto: CreateContactDto,
  ): ResponseCreateContactDto {
    const contact = this.contactsService.createContact(createContactDto);
    return {
      contact,
      message: 'Contact created with success!',
      statusCode: 200,
    };
  }

  @Put('/updateContact')
  updateContact(@Body(ValidationPipe) editContactDto: EditContactDto) {
    const contact = this.contactsService.updateContact(editContactDto);
    return {
      contact,
      message: 'Contact updated with success!',
      statusCode: 200,
    };
  }

  @Delete('/deleteContact')
  deleteContact(@Body() deleteContactDto: DeleteContactDto) {
    this.contactsService.deleteContactDto(deleteContactDto);
    return {
      message: 'Contact deleted with success!',
      statusCode: 200,
    };
  }
}
