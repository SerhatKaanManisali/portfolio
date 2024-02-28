import { Component, OnInit } from '@angular/core';
import { flyInLeft, flyInRight } from '../shared/animations';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [flyInLeft, flyInRight]
})
export class AboutMeComponent implements OnInit{
  isVisible: boolean = false;
  backgroundShadow: HTMLElement | null = null;

  ngOnInit(): void {
    this.backgroundShadow = document.getElementById('background-shadow');
    this.createObserver();
  }

  createObserver() {
    const callback = (entries: any) => {
      entries &&
        entries.forEach((entry: any) => {
          if (entry.isIntersecting && target) {
            this.isVisible = true;
            target.style.height = '100px';
            this.backgroundShadow!.style.opacity = '1';
          }
        })
    };

    const options = {
      rootMargin: '0px 0px -400px 0px'
    }

    const observer = new IntersectionObserver(callback, options);
    const target = document.getElementById('about-me');
    target && observer.observe(target);
  }
}
