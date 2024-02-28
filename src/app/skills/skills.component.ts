import { Component, OnInit } from '@angular/core';
import { flyInLeft, flyInRight } from '../shared/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [flyInLeft, flyInRight]
})
export class SkillsComponent implements OnInit {
  skills: {
    name: string;
    path: string;
  }[] = [
      {
        name: 'Angular',
        path: 'assets/img/angular.png'
      },
      {
        name: 'Typescript',
        path: 'assets/img/typescript.png'
      },
      {
        name: 'Javascript',
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

  isVisible: boolean = false;

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
