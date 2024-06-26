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
        skills: ['JavaScript', 'CSS', 'HTML', 'Git'],
        descriptionEn: 'Kanban-based task management application that allows users to create, edit, and delete tasks, providing a better overview of the workload.',
        descriptionDe: 'Kanban-basierte Anwendung zur Aufgabenverwaltung, die es den Benutzern ermöglicht, Aufgaben zu erstellen, zu bearbeiten und zu löschen, um so einen besseren Überblick über das Arbeitspensum zu erhalten.',
        testLink: 'https://join.serhat-kaan-manisali.com',
        gitHubLink: 'https://github.com/SerhatKaanManisali/join',
        path: 'assets/img/join.png'
      },
      {
        name: 'El Pollo Loco',
        skills: ['JavaScript', 'CSS', 'HTML', 'Git'],
        descriptionEn: "A jump and run game where you play as Pepe and face his dreaded enemy, El Pollo Loco. You can defeat him by throwing salsa bottles at him. But be careful! Don’t get too close, or you'll find out why he's so feared.",
        descriptionDe: 'Ein Jump-and-Run-Spiel, in dem Sie Pepe spielen und sich seinem gefürchteten Feind El Pollo Loco stellen. Sie können ihn besiegen, indem Sie Salsaflaschen auf ihn werfen. Aber vorsicht! Kommen Sie ihm nicht zu nahe, sonst wird er Ihnen zeigen, warum er so gefürchtet ist.',
        testLink: 'https://el-pollo-loco.serhat-kaan-manisali.com',
        gitHubLink: 'https://github.com/SerhatKaanManisali/el-pollo-loco',
        path: 'assets/img/el-pollo-loco.png'
      },
      {
        name: 'Simple CRM',
        skills: ['Angular', 'TypeScript', 'SCSS', 'HTML', 'Git', 'Angular Material', 'Firebase'],
        descriptionEn: "A simple tool for managing customer relationships. It allows you to organize customers according to their purchase process and enter products along with their sales figures.",
        descriptionDe: 'Ein simples Tool zur Organisation von Kundenbeziehungen. Es ermöglicht die Verwaltung von Kunden entsprechend ihrem Kaufprozess sowie das Eintragen von Produkten samt Verkaufszahlen.',
        testLink: 'https://simple-crm.serhat-kaan-manisali.com',
        gitHubLink: 'https://github.com/SerhatKaanManisali/simple-crm',
        path: 'assets/img/crm.png'
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