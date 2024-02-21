import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects: {
    name: string;
    skills: string[];
    description: string;
    testLink: string; gitHubLink: string;
    path: string;
  }[] = [
      {
        name: 'Join',
        skills: ['Javascript', 'CSS', 'HTML'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quam illum libero saepe sed corporis cum, molestias ipsam ab voluptatibus eius quibusdam soluta id magni aliquid necessitatibus voluptatum facere repellendus.',
        testLink: '',
        gitHubLink: 'https://github.com/SerhatKaanManisali/join',
        path: 'src/assets/img/join.png'
      },
      {
        name: 'El Pollo Loco',
        skills: ['Javascript', 'CSS', 'HTML'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quam illum libero saepe sed corporis cum, molestias ipsam ab voluptatibus eius quibusdam soluta id magni aliquid necessitatibus voluptatum facere repellendus.',
        testLink: '',
        gitHubLink: 'https://github.com/SerhatKaanManisali/el-pollo-loco',
        path: 'src/assets/img/el-pollo-loco.png'
      }
    ]
}
