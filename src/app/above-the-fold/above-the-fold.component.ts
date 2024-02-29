import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, HostListener} from '@angular/core';
import { flyInLeft, flyInRight, hover } from '../shared/animations';


@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
  animations: [flyInLeft, flyInRight, hover]
})
export class AboveTheFoldComponent implements OnInit {

  isVisible: boolean = true;
  hoverAnimation: boolean = false;
  windowWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }

  @ViewChild ('scrollSymbol') scrollSymbol!: ElementRef;

  ngOnInit(): void {
    setInterval(() => {this.hoverAnimation = !this.hoverAnimation}, 1000)
  }

}