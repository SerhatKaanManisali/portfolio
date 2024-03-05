
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    this.disableLandscapeMode();
  }

  disableLandscapeMode() {
    function checkOrientation() {
      if (window.orientation === 90 || window.orientation === -90) {
        alert('This website is not optimized for landscape mode. Please use portrait mode.');
      }
    }

    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('load', checkOrientation);
  }
}