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
        skills: ['Javascript', 'CSS', 'HTML'],
        descriptionEn: 'Kanban-based task management application that allows users to create, edit, and delete tasks easily, providing better control over their workload. ',
        descriptionDe: 'Kanban-basierte Aufgabenverwaltungsanwendung, die es den Benutzern ermöglicht, auf einfache Weise Aufgaben zu erstellen, zu bearbeiten und zu löschen, um so eine bessere Kontrolle über ihr Arbeitspensum zu erhalten.',
        testLink: 'https://join.serhat-kaan-manisali.com',
        gitHubLink: 'https://github.com/SerhatKaanManisali/join',
        path: 'assets/img/join.png'
      },
      {
        name: 'El Pollo Loco',
        skills: ['Javascript', 'OOP', 'CSS', 'HTML'],
        descriptionEn: 'Jump and run game in which you play Pepe and have to face your dreaded enemy El Pollo Loco. Throwing salsa bottles at him can defeat him. But be careful. Do not approach him too closely, or he will show you why he is so feared.',
        descriptionDe: 'Jump and Run Spiel, in dem du Pepe spielst und dich deinem gefürchteten Feind El Pollo Loco stellen musst. Du kannst ihn besiegen, indem du Salsaflaschen auf ihn wirfst. Aber sei vorsichtig. Komm ihm nicht zu nahe, sonst wird er dir zeigen, warum er so gefürchtet ist.',
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