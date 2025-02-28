import { Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent},
    // {path: 'create-user', component: CreateUserComponent},
    {path: 'user', component: UserComponent},
    {path: 'list', component: ListUserComponent},
    {path: '**', component: NotFoundComponent}
];
