import { Injectable } from '@angular/core';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private storageKey = 'messages';
  messages: Contact[] = [];

  constructor() {
    // Load messages from localStorage when the service is initialized
    const storedmessages = localStorage.getItem(this.storageKey);
    if (storedmessages) {
      try {
        this.messages = JSON.parse(storedmessages);
      } catch (error) {
        console.error('Error parsing stored messages:', error);
      }
    }
  }

  ajoutermessage(
    id: number,
    name: string,
    email: string,
    message: string,
    subject: string,
  ): void {
    const nouvellemessage = new Contact(
      id,
      name,
      email,
      message,
      subject,
    );
    this.messages.push(nouvellemessage);

    // Save messages to localStorage after adding a new message
    this.saveToLocalStorage();
  }

  getmessages(): Contact[] {
    return this.messages;
  }

  supprimermessage(message: Contact): void {
    const index = this.messages.indexOf(message);
    if (index !== -1) {
      this.messages.splice(index, 1);
      this.saveToLocalStorage(); // Save messages to localStorage after removing an message
    }
  }

  
  private saveToLocalStorage(): void {
    // Save the messages array to localStorage
    localStorage.setItem(this.storageKey, JSON.stringify(this.messages));
  }
}
