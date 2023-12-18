import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  id!:number;
  name!:string;
  email!:string;
  subject!:string;
  message!:string;

  @Input() contact!: Contact;

  constructor(private messageService: MessageService) {}
  ngOnInit(): void {
    this.contact = new Contact(0, '', '', '', '');
  }

  ajouterMsg(): void {
    Swal.fire({
        title: 'Message envoyé !',
        icon: 'success',
        text: 'Votre message a été envoyé avec succès.',
        confirmButtonColor: '#18d26e', // Choisissez la couleur que vous préférez
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            this.messageService.ajoutermessage(
                this.contact.id,
                this.contact.name,
                this.contact.email,
                this.contact.subject,
                this.contact.message
            );

            // Réinitialiser l'objet contact après l'ajout d'un nouveau message
            this.contact = new Contact(0, '', '', '', ''); // Ajustez les valeurs en conséquence
        }
    });
}

}
