import { Injectable, NotFoundException } from '@nestjs/common';
import { contacts } from 'src/utils/mock';
import { Contact } from 'src/utils/types';
import { CreateContactDto } from './dto/create-contact.dto';
import { randomUUID } from 'crypto';
import { EditContactDto } from './dto/edit-contact.dto';
import { DeleteContactDto } from './dto/delete-contact.dto';
import { ResponseContactsDto } from './dto/responses/response-contacts-dto';

@Injectable()
export class ContactRepository {
  getContacts(page: number): ResponseContactsDto {
    let initial = 4 * page;
    let limit = initial + 4;

    const count = contacts.length;
    let items = [];

    if (limit > contacts.length - 1) {
      items = contacts.slice(initial, contacts.length);
    } else {
      items = contacts.slice(initial, limit);
    }

    const response: ResponseContactsDto = {
      contacts: items,
      count: count,
    };

    return response;
  }
  createContact(createContactDto: CreateContactDto) {
    const newContact: Contact = {
      id: randomUUID(),
      firstName: createContactDto.firstName,
      lastName: createContactDto.lastName,
      phoneNumber: createContactDto.phoneNumber,
    };

    contacts.push(newContact);
    return createContactDto;
  }

  updateContact(editContactDto: EditContactDto) {
    const index = contacts.findIndex(
      (contact) => contact.id === editContactDto.id,
    );

    if (index === -1) {
      throw new NotFoundException('Contact not found !');
    }

    const updatedContact: Contact = {
      id: editContactDto.id,
      firstName: editContactDto.firstName,
      lastName: editContactDto.lastName,
      phoneNumber: editContactDto.phoneNumber,
    };

    contacts[index] = updatedContact;

    return updatedContact;
  }

  deleteContact(deleteContactDto: DeleteContactDto) {
    const indexToRemove = contacts.findIndex(
      (contact) => contact.id === deleteContactDto.id,
    );

    if (indexToRemove === -1) {
      throw new NotFoundException('Contact not found !');
    }

    contacts.splice(indexToRemove, 1);
  }
}
