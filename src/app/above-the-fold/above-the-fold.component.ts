import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
  animations: [
    trigger('flyInLeft', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-25%)'
        }),
        animate(
          '0.5s ease-in-out',
          style({
            opacity: 1,
            transform: 'translateX(0%)'
          })
        )
      ])
    ]),
    trigger('flyInRight', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(25%)'
        }),
        animate(
          '0.5s ease-in-out',
          style({
            opacity: 1,
            transform: 'translateX(0%)'
          })
        )
      ])
    ])
  ]
})
export class AboveTheFoldComponent {

  constructor() {
    this.isElementVisible = true;
  }

  @ViewChild('elementToAnimate') elementToAnimate!: ElementRef;
  isElementVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    const elementPosition = this.elementToAnimate.nativeElement.offsetTop;
    const windowHeight = window.innerHeight;

    // Überprüfen Sie, ob das Element in den sichtbaren Bereich des Bildschirms gelangt
    if (scrollPosition > elementPosition - windowHeight + 100) {
      this.isElementVisible = true;
    }
  }
}