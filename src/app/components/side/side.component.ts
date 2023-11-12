import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
})
export class SideComponent {
  activeLinkId: string | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

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
