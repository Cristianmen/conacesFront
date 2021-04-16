import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEventosComponent } from './pages/admin-eventos/admin-eventos.component';
import { AdminPreguntasComponent } from './pages/admin-preguntas/admin-preguntas.component';
import { AdminReposComponent } from './pages/admin-repos/admin-repos.component';
import { EventComponent } from './pages/event/event.component';
import { FrequentQuestionsComponent } from './pages/frequent-questions/frequent-questions.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { LoginComponent } from './pages/login/login.component';
import { RepositoriesComponent } from './pages/repositories/repositories.component';
import { WhatIsComponent } from './pages/what-is/what-is.component';



const routes: Routes = [

  { path: 'adminEventos', component: AdminEventosComponent },
  { path: 'adminPreguntas', component: AdminPreguntasComponent },
  { path: 'adminRepositorios', component: AdminReposComponent },
  { path: 'home', component: HomeAdminComponent },

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
