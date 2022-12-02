import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TaskdetailsComponent } from './components/taskdetails/taskdetails.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [
  { path: 'todolist/:id', component: TaskdetailsComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: '', component: TodolistComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
