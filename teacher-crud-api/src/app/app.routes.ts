import { Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

export const routes: Routes = [
    {path: '', component: TeacherListComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'list', component: TeacherListComponent}
];
