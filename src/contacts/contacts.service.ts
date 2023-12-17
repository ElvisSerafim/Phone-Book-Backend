import { Injectable } from '@nestjs/common';
import { Contact } from '../utils/types';
import { ContactRepository } from './contacts.repository';
import { CreateContactDto } from './dto/create-contact.dto';
import { EditContactDto } from './dto/edit-contact.dto';
import { DeleteContactDto } from './dto/delete-contact.dto';
import { ResponseContactsDto } from './dto/responses/response-contacts-dto';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactRepository) {}

  getContacts(page: number): ResponseContactsDto {
    return this.contactRepository.getContacts(page);
  }
  createContact(createContactDto: CreateContactDto): CreateContactDto {
    return this.contactRepository.createContact(createContactDto);
  }
  updateContact(editContactDto: EditContactDto): EditContactDto {
    return this.contactRepository.updateContact(editContactDto);
  }

  deleteContactDto(deleteContactDto: DeleteContactDto) {
    return this.contactRepository.deleteContact(deleteContactDto);
  }
}
