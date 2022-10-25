import { Component } from '@angular/core';
import { Contact } from './models/contacts';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Contacts.UI';
  contacts: Contact[] = [];
  contactToEdit?: Contact;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService
      .getContacts()
      .subscribe((result: Contact[]) => (this.contacts = result));
  }

  updateContacts(contacts: Contact[]) {
    this.contacts = contacts;
  }

  initNewContact() {
    this.contactToEdit = new Contact();
  }

  editContact(contact: Contact) {
    this.contactToEdit = contact;
  }
}
