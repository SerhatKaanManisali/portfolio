import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  contactData: {
    name: string;
    email: string;
    message: string;
  } = {
      name: '',
      email: '',
      message: ''
    }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      
    }
  }
}