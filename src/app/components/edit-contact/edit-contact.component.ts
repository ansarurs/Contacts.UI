import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contacts';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  @Input() contact?: Contact;
  @Output() contactsUpdated = new EventEmitter<Contact[]>();

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  updateContact(contact: Contact) {
    this.contactService
      .updateContact(contact)
      .subscribe((contacts: Contact[]) => this.contactsUpdated.emit(contacts));
  }

  deleteContact(contact: Contact) {
    this.contactService
      .deleteContact(contact)
      .subscribe((contact: Contact[]) => this.contactsUpdated.emit(contact));
  }

  createContact(contact: Contact) {
    this.contactService
      .createContact(contact)
      .subscribe((contacts: Contact[]) => this.contactsUpdated.emit(contacts));
  }
}