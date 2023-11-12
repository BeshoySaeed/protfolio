import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  activeLinkId: string | null = null;

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  goToProjects() {
    document.getElementById('projects')?.scrollIntoView();
  }

  goToAbout() {
    document.getElementById('about')?.scrollIntoView();
  }

  goToEducation() {
    document.getElementById('education')?.scrollIntoView();
  }

  goToSkills() {
    document.getElementById('skills')?.scrollIntoView();
  }

  goToContact() {
    document.getElementById('contact')?.scrollIntoView();
  }

  onScroll() {
    const componentElements = document.querySelectorAll('.c-class');
    const windowHeight = window.innerHeight;

    let activeLinkId = null;

    for (let i = 0; i < componentElements.length; i++) {
      const element = componentElements[i] as HTMLElement;
      const rect = element.getBoundingClientRect();

      const scrollPositionThreshold = windowHeight * 0.5;

      if (
        rect.top <= scrollPositionThreshold &&
        rect.bottom >= scrollPositionThreshold
      ) {
        const componentId = element.getAttribute('id');
        activeLinkId = componentId;
      }
    }

    this.activeLinkId = activeLinkId;
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }
}
