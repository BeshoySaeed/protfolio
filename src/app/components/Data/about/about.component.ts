import { Component } from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTwitter,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  github: any;
  linkedIn: any;
  facebook: any;
  twitter: any;
  stackoverFlow: any;
  constructor() {
    this.github = faGithub;
    this.linkedIn = faLinkedin;
    (this.facebook = faFacebook),
      (this.twitter = faTwitter),
      (this.stackoverFlow = faStackOverflow);
  }
}
