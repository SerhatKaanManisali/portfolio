import { Component, OnInit, inject } from '@angular/core';
import { flyInLeft, flyInRight } from '../shared/animations';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [flyInLeft, flyInRight]
})
export class AboutMeComponent implements OnInit {
  appComponent: AppComponent = inject(AppComponent);
  isVisible: boolean = false;
  backgroundShadow: HTMLElement | null = null;

  EN: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  } = {
      title: "About Me",
      paragraph1: "Hi, I am Serhat, 21 years old and Junior Frontend Developer. After successfully completing more than 10 projects at Developer Academy, I have gained extensive experience in developing web applications using JavaScript and Angular.",
      paragraph2: "In my responsive web applications, I focus particularly on a smooth user experience and intuitive usability. Regardless of whether with or without CSS frameworks such as Material Design and Bootstrap.",
      paragraph3: "Group projects have taught me the importance of clean code and clear communication.",
    }

  DE: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  } = {
      title: "Über mich",
      paragraph1: "Hi, ich bin Serhat, 21 Jahre alt und Junior Frontend Entwickler. Nach mehr als 10 erfolgreich abgeschlossenen Projekten bei der Developer Akademie habe ich umfangreiche Erfahrung in der Entwicklung von Webanwendungen mit JavaScript und Angular gesammelt.",
      paragraph2: "In meinen responsiven Webapplikationen lege ich besonders viel Wert auf hohe Benutzerfreundlichkeit und intuitive Bedienbarkeit. Ganz gleich, ob mit oder ohne CSS-Frameworks wie Material Design und Bootstrap.",
      paragraph3: "Durch Gruppenprojekte habe ich die Wichtigkeit von sauberem Code und einer klarer Kommunikation gelernt.",
    }

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
