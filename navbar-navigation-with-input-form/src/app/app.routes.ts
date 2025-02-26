import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { InputShowComponent } from './input-show/input-show.component';

export const routes: Routes = [
    // {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'input-show', component: InputShowComponent},
    
    {path: '**', redirectTo: 'home'}
];
