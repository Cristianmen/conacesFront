import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './pages/event/event.component';
import { FrequentQuestionsComponent } from './pages/frequent-questions/frequent-questions.component';
import { LoginComponent } from './pages/login/login.component';
import { RepositoriesComponent } from './pages/repositories/repositories.component';
import { WhatIsComponent } from './pages/what-is/what-is.component';



const routes: Routes = [

  { path: 'eventos', component: EventComponent },
  { path: 'preguntas', component: FrequentQuestionsComponent },
  { path: 'repositorios', component: RepositoriesComponent },
  { path: 'conaces', component: WhatIsComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
