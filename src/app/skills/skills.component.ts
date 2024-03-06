import { Component, OnInit, HostListener, inject } from '@angular/core';
import { flyInLeft, flyInRight } from '../shared/animations';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [flyInLeft, flyInRight]
})
export class SkillsComponent implements OnInit {
  appComponent: AppComponent = inject(AppComponent);

  skills: {
    name: string;
    path: string;
  }[] = [
      {
        name: 'Angular',
        path: 'assets/img/angular.png'
      },
      {
        name: 'TypeScript',
        path: 'assets/img/typescript.png'
      },
      {
        name: 'JavaScript',
        path: 'assets/img/javascript.png'
      },
      {
        name: 'HTML',
        path: 'assets/img/html.png'
      },
      {
        name: 'Firebase',
        path: 'assets/img/firebase.png'
      },
      {
        name: 'Git',
        path: 'assets/img/git.png'
      },
      {
        name: 'CSS',
        path: 'assets/img/css.png'
      },
      {
        name: 'Rest-Api',
        path: 'assets/img/rest-api.png'
      },
      {
        name: 'Scrum',
        path: 'assets/img/scrum.png'
      },
      {
        name: 'Material Design',
        path: 'assets/img/material-design.png'
      }
    ]

  EN = {
    title: 'My Skills',
    description: 'Through dedicated practice, I have developed several fundamental skills in frontend development.',
    button: 'Get in touch'
  }

  DE = {
    title: 'Knowhow',
    description: 'Durch engagierte Üben habe ich einige fundamentale Fähigkeiten in der Frontend Entwicklung entwickelt.',
    button: 'Kontakt aufnehmen'
  }

  isVisible: boolean = false;
  windowWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }


  ngOnInit(): void {
    this.createObserver();
  }

  createObserver() {
    const callback = (entries: any) => {
      entries &&
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          }
        })
    };

    const options = {
      rootMargin: '0px 0px -600px 0px'
    }

    const observer = new IntersectionObserver(callback, options);
    const target = document.getElementById('skills');
    target && observer.observe(target);
  }
}
