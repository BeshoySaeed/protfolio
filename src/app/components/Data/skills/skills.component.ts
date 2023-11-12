import { Component } from '@angular/core';
import {
  faHtml5,
  faCss3,
  faJs,
  faAngular,
  faBootstrap,
  faGit,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  html5: any;
  css3: any;
  js: any;
  angular: any;
  bootstrap: any;
  git: any;
  github: any;

  constructor() {
    this.html5 = faHtml5;
    this.css3 = faCss3;
    this.js = faJs;
  }
}
