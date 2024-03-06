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
      paragraph1: "I am an enthusiastic frontend developer and have been interested in information technology since my school days. At the Developer Akademie, I was able to pursue my passion and acquire knowledge in front-end development by developing various projects.",
      paragraph2: "I have gained experience in fundamental web technologies, as well as in Angular, through developing web applications both independently and in a team. I am always eager to learn new technologies and improve my skills.",
      paragraph3: "During development, I always strive for clear communication and clean code. After all, both aspects are essential for smooth teamwork. My problem-solving skills, combined with a focus on user-friendly and intuitive interfaces, round out my projects.",
    }

  DE: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  } = {
      title: "Über mich",
      paragraph1: "Ich bin ein begeisterter Frontend Entwickler und interessiere mich schon seit meiner Schulzeit für Informationstechnologie. Bei der Developer Akademie konnte ich meiner Leidenschaft nachgehen und durch die Entwicklung verschiedener Projekte Kenntnisse in der Frontend-Entwicklung aneignen.",
      paragraph2: "Ich habe Erfahrung in grundlegenden Webtechnologien sowie in Angular durch die selbstständige und im Team durchgeführte Entwicklung von Webanwendungen gesammelt. Ich bin immer bestrebt, neue Technologien zu erlernen und meine Fähigkeiten zu verbessern.",
      paragraph3: "Bei der Entwicklung lege ich großen Wert auf klare Kommunikation und sauberen Code. Schließlich sind beide Aspekte für eine reibungslose Teamarbeit essenziell. Meine Problemlösungskompetenz, kombiniert mit einem Fokus auf benutzerfreundliche und intuitive Schnittstellen, runden meine Projekte ab.",
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
