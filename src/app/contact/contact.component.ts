import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { flyInLeft, flyInRight } from '../shared/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [flyInLeft, flyInRight]
})
export class ContactComponent implements OnInit {

  http = inject(HttpClient);

  checked: boolean = false;
  greenArrow: boolean = false;
  checkBoxBackground: boolean = false;

  contactData: {
    name: string;
    email: string;
    message: string;
  } = {
      name: '',
      email: '',
      message: ''
    }

    mailTest = true;

    post = {
      endPoint: 'https://deineDomain.de/sendMail.php',
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
      if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
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
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
        
        ngForm.resetForm();
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