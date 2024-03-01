import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, HostListener } from '@angular/core';
import { flyInLeft, flyInRight } from '../../shared/animations';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  animations: [flyInLeft, flyInRight]
})
export class ProjectComponent implements AfterViewInit{
  @Input() project: {
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
  @Input() even: boolean = true;
  @Input() index: number = 0;
  isVisible: boolean = false;
  windowWidth: number = window.innerWidth;
  

  ngAfterViewInit(): void {
    this.createObserver()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
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
    const target = document.getElementById('project' + this.index);
    target && observer.observe(target);
  }
}