import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductFormComponent } from './product/product.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: WelcomeComponent},
    {path: 'home', pathMatch: 'full', component: WelcomeComponent},
    {path: 'product', pathMatch: 'full', component: ProductFormComponent},
    {path: 'product-list', pathMatch: 'full', component: ProductListComponent},
    {path: '**', pathMatch: 'full', component: NotFoundComponent}
];
