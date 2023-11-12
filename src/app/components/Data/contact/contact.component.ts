import { Component } from '@angular/core';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  location: any;
  contact: any;
  mail: any;

  constructor() {
    this.location = faMap;
    this.contact = faPhone;
    this.mail = faMessage;
  }
}
