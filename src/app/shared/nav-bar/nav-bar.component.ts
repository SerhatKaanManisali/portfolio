import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  appComponent: AppComponent = inject(AppComponent);
  highlightedLinkIndex: number = 0;
  menuActive = false;
  windowWidth: number = window.innerWidth;

  toggleMenu() {
    this.menuActive = !this.menuActive;
    document.body.style.overflowY = this.menuActive ? 'hidden' : 'auto';
  }

  chooseLanguage(language: string) {
    this.appComponent.chosenLanguege = language;
  }

  highlightLink(index: number) {
    if (this.windowWidth >= 769) {
      this.highlightedLinkIndex = index;
    } else {
      this.toggleMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }
}