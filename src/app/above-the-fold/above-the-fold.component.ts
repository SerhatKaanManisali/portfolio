import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, HostListener, inject } from '@angular/core';
import { flyInLeft, flyInRight, hover } from '../shared/animations';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
  animations: [flyInLeft, flyInRight, hover]
})
export class AboveTheFoldComponent implements OnInit {
  appComponent: AppComponent = inject(AppComponent);
  isVisible: boolean = true;
  hoverAnimation: boolean = false;
  windowWidth: number = window.innerWidth;

  EN: {
    introduction: string;
    name: string;
    description: string;
    button: string;
    scroll: string;
  } = {
      introduction: 'I am',
      name: 'Serhat Kaan Manisali',
      description: 'FRONTEND DEVELOPER',
      button: "Let's talk!",
      scroll: 'Scroll down'
    }

  DE: {
    introduction: string;
    name: string;
    description: string;
    button: string;
    scroll: string;
  } = {
      introduction: 'Ich bin',
      name: 'Serhat Kaan Manisali',
      description: 'FRONTEND ENTWICKLER',
      button: 'Kontakt',
      scroll: 'Runter scrollen'
    }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }

  @ViewChild('scrollSymbol') scrollSymbol!: ElementRef;

  ngOnInit(): void {
    setInterval(() => { this.hoverAnimation = !this.hoverAnimation }, 1000)
  }

}