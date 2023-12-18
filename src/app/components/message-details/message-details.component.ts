import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent {


  name!: string;
  email!: string;
  subject!:string;
  message!:string;
  id!: number;
  @Input() contact!: Contact;

  constructor(private messageService: MessageService) {
  }
  ngOnInit(): void {}

  supprimerMsg(contact: Contact): void {
    // Suppression de l'action
    this.messageService.supprimermessage(contact);
  }

  getMsgs(): Contact[] {
    return this.messageService.getmessages();
  }

}
