import { Component, inject } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  appComponent: AppComponent = inject(AppComponent);
}
