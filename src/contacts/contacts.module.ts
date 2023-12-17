import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactRepository } from './contacts.repository';
import { ContactController } from './contacts.controller';

@Module({
  controllers: [ContactController],
  providers: [ContactsService, ContactRepository],
})
export class ContactsModule {}
