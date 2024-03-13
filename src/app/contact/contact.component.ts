import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { fadeInOut, flyInLeft, flyInRight } from '../shared/animations';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [flyInLeft, flyInRight, fadeInOut]
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
    nameValidation: string;
    emailValidation: string;
    messageValidation: string;
    beforePP: string;
    privacyPolicy: string;
    afterPP: string;
    button: string;
  } = {
      title: 'Contact',
      subTitle: 'Need help with your project?',
      description: 'You are welcome to send me a message. I am curious about your ideas and look forward to working with you on exciting projects.',
      nameValidation: 'Your name is required.',
      emailValidation: 'Your email is required.',
      messageValidation: 'Your message is too short.',
      beforePP: 'I have read the',
      privacyPolicy: 'privacy policy',
      afterPP: 'and agree to the processing of my data as outlined.',
      button: 'Send'
    }

  DE: {
    title: string;
    subTitle: string;
    description: string;
    nameValidation: string;
    emailValidation: string;
    messageValidation: string;
    beforePP: string;
    privacyPolicy: string;
    afterPP: string;
    button: string;
  } = {
      title: 'Kontakt',
      subTitle: 'Benötigen Sie Unterstützung bei Ihrem Projekt?',
      description: 'Senden Sie mir gerne eine Nachricht. Ich bin neugierig auf Ihre Ideen und freue mich mit Ihnen an spannenden Projekten zu arbeiten.',
      nameValidation: 'Ihr Name ist erforderlich.',
      emailValidation: 'Ihre Email ist erforderlich',
      messageValidation: 'Ihre Nachricht ist zu kurz.',
      beforePP: 'Ich habe die',
      privacyPolicy: 'Datenschutzerklärung',
      afterPP: 'gelesen und stimme der Verarbeitung meiner Daten wie angegeben zu.',
      button: 'Senden'
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

    messageSent: boolean = false;

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
            this.toggleCheckBox();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.messageConfirmation(),
        });
    }
  }

  messageConfirmation() {
    this.messageSent = true;
    setTimeout(() => this.messageSent = false, 3000);
  }

  toggleCheckBox() {
    if (!this.checked) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }
}