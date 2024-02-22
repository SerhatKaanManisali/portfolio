import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input()project: {
    name: string;
    skills: string[];
    description: string;
    testLink: string; gitHubLink: string;
    path: string;
  } = {
    name: 'Join',
    skills: ['Javascript', 'CSS', 'HTML'],
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quam illum libero saepe sed corporis cum, molestias ipsam ab voluptatibus eius quibusdam soluta id magni aliquid necessitatibus voluptatum facere repellendus.',
    testLink: '',
    gitHubLink: 'https://github.com/SerhatKaanManisali/join',
    path: '../../../assets/img/join.png'
  }
  @Input()even: boolean = true;
}