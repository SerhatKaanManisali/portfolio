import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
    { path: 'imprint', component: ImprintComponent },
    { path: '', component: MainContentComponent }
];