import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private url = 'Contacts';

  constructor(private http: HttpClient) {}

  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateContact(contact: Contact): Observable<Contact[]> {
    return this.http.put<Contact[]>(
      `${environment.apiUrl}/${this.url}`,
      contact
    );
  }

  public createContact(contct: Contact): Observable<Contact[]> {
    return this.http.post<Contact[]>(
      `${environment.apiUrl}/${this.url}`,
      contct
    );
  }

  public deleteContact(hero: Contact): Observable<Contact[]> {
    return this.http.delete<Contact[]>(
      `${environment.apiUrl}/${this.url}/${hero.id}`
    );
  }
}
