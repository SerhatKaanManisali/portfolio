import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild} from '@angular/core';
import { flyInLeft, flyInRight } from '../shared/animations';


@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
  animations: [flyInLeft, flyInRight]
})
export class AboveTheFoldComponent {

  isVisible: boolean = true;

  @ViewChild ('scroll-symbol') scrollSymbol!: ElementRef;

}