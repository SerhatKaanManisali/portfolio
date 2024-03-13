import { Component, OnInit, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { flyInLeft, flyInRight } from '../shared/animations';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations: [flyInLeft, flyInRight]
})
export class PortfolioComponent implements OnInit {
  appComponent: AppComponent = inject(AppComponent);

  projects: {
    name: string;
    skills: string[];
    descriptionEn: string;
    descriptionDe: string;
    testLink: string; gitHubLink: string;
    path: string;
  }[] = [
      {
        name: 'Join',
        skills: ['Javascript', 'CSS', 'HTML', 'Git'],
        descriptionEn: 'Task management web app using the Kanban principle to organise multiple users.',
        descriptionDe: 'Task Management Web-App nach dem Kanban-Prinzip zur Organisation mehrerer Anwender.',
        testLink: 'https://join.serhat-kaan-manisali.com',
        gitHubLink: 'https://github.com/SerhatKaanManisali/join',
        path: 'assets/img/join.png'
      },
      {
        name: 'El Pollo Loco',
        skills: ['Javascript', 'CSS', 'HTML', 'Git'],
        descriptionEn: 'Jump & run web browser game developed utilizing object-oriented programming.',
        descriptionDe: 'Jump and Run Webbrowser Spiel, entwickelt mittels objektorientierter Programmierung.',
        testLink: 'https://el-pollo-loco.serhat-kaan-manisali.com',
        gitHubLink: 'https://github.com/SerhatKaanManisali/el-pollo-loco',
        path: 'assets/img/el-pollo-loco.png'
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
        });
    };

    const options = {
      rootMargin: '0px 0px -300px 0px'
    }

    const observer = new IntersectionObserver(callback, options);
    const target = document.getElementById('portfolio');
    target && observer.observe(target);
  }
}