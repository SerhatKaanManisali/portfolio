import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { flyInLeft, flyInRight } from '../shared/animations';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [flyInLeft, flyInRight]
})
export class ContactComponent implements OnInit {
  appComponent: AppComponent = inject(AppComponent);
  http = inject(HttpClient);

  checked: boolean = false;
  greenArrow: boolean = false;
  checkBoxBackground: boolean = false;

  EN: {
    title: string;
    subTitle: string;
    description: string;
    description2: string;
    callToAction: string;
    nameValidation: string;
    emailValidation: string;
    messageValidation: string;
    beforePP: string;
    privacyPolicy: string;
    afterPP: string;
    button: string;
  } = {
      title: 'Contact',
      subTitle: 'Got a problem to solve?',
      description: 'Contact me through this form. I am interested in hearing from you, knowing your ideas, and contributing to your projects with my work.',
      description2: 'Need a frontend developer?',
      callToAction: 'Contact me!',
      nameValidation: 'Your name is required.',
      emailValidation: 'Your email is required.',
      messageValidation: 'Your message is too short.',
      beforePP: 'I have read the',
      privacyPolicy: 'privacy policy',
      afterPP: 'and agree to the processing of my data as outlined.',
      button: 'Send message :)'
    }

  DE: {
    title: string;
    subTitle: string;
    description: string;
    description2: string;
    callToAction: string;
    nameValidation: string;
    emailValidation: string;
    messageValidation: string;
    beforePP: string;
    privacyPolicy: string;
    afterPP: string;
    button: string;
  } = {
      title: 'Kontakt',
      subTitle: 'Gibt es ein Problem zu lösen?',
      description: 'Kontaktieren Sie mich über dieses Formular. Ich bin gespannt auf Ihre Ideen und möchte mit meiner Arbeit zu Ihren Projekten beitragen.',
      description2: 'Brauchen Sie einen Frontend Entwickler?',
      callToAction: 'Kontaktieren Sie mich!',
      nameValidation: 'Ihr Name ist erforderlich.',
      emailValidation: 'Ihre Email ist erforderlich',
      messageValidation: 'Ihre Nachricht ist zu kurz.',
      beforePP: 'Ich habe die',
      privacyPolicy: 'Datenschutzerklärung',
      afterPP: 'gelesen und stimme der Verarbeitung meiner Daten wie angegeben zu.',
      button: 'Nachricht senden :)'
    }

  contactData: {
    name: string;
    email: string;
    message: string;
  } = {
      name: '',
      email: '',
      message: ''
    }

  post = {
    endPoint: 'https://serhat-kaan-manisali.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  isVisible: boolean = false;

  ngOnInit(): void {
    this.createObserver();
  }

  createObserver() {
    const callback = (entries: any) => {
      entries &&
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            target!.style.height = '100px';
          }
        });
    };

    const options = {
      rootMargin: '0px 0px -400px 0px'
    }

    const observer = new IntersectionObserver(callback, options);
    const target = document.getElementById('contact');
    target && observer.observe(target);
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  toggleCheckBox() {
    if (!this.checked) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }
}