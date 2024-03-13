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
      paragraph1: "I am a Junior Frontend Developer with experience in building JavaScript and Angular web applications. After completing school, I joined the Developer Academy to pursue my interest in web development.",
      paragraph2: "Due to my ability to comprehend things quickly, I learnt many web development methods within a few months and applied them across various projects.",
      paragraph3: "During group projects, I gained experience in communication and collaboration with other team members. I was particularly keen to direct the team's focus to high priority topics.",
    }

  DE: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  } = {
      title: "Über mich",
      paragraph1: "Ich bin Junior Frontend Developer mit Projekterfahrung in JavaScript und Angular. Nach meinem Schulabschluss entschied ich mich für die Weiterbildung an der Developer Akademie, um meinem Interesse an Webentwicklung nachzugehen.",
      paragraph2: "Durch meine schnelle Auffassungsgabe habe ich dort innerhalb weniger Monate viele Methoden der Webentwicklung erlernt und diese in verschiedenen Webapplikationen eingesetzt.",
      paragraph3: "In Gruppenprojekten konnte ich Erfahrung bezüglich der Kommunikation und Zusammenarbeit mit anderen Teammitgliedern sammeln. Hierbei habe ich besonderen Wert darauf gelegt, den Fokus des Teams auf die wichtigsten Themen zu lenken.",
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
