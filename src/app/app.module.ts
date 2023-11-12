import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideComponent } from './components/side/side.component';
import { AboutComponent } from './components/Data/about/about.component';
import { EducationComponent } from './components/Data/education/education.component';
import { SkillsComponent } from './components/Data/skills/skills.component';
import { ProjectsComponent } from './components/Data/projects/projects.component';
import { ContactComponent } from './components/Data/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
