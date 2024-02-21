import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
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
}
