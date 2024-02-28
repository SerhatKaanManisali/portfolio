import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { flyInLeft, flyInRight } from '../shared/animations';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations: [flyInLeft, flyInRight]
})
export class PortfolioComponent implements OnInit {

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
        path: 'assets/img/join.png'
      },
      {
        name: 'El Pollo Loco',
        skills: ['Javascript', 'CSS', 'HTML'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quam illum libero saepe sed corporis cum, molestias ipsam ab voluptatibus eius quibusdam soluta id magni aliquid necessitatibus voluptatum facere repellendus.',
        testLink: '',
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