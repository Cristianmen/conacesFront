import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CardLoginComponent } from './componentes/card-login/card-login.component';
import { WhatIsComponent } from './pages/what-is/what-is.component';
import { RepositoriesComponent } from './pages/repositories/repositories.component';
import { FrequentQuestionsComponent } from './pages/frequent-questions/frequent-questions.component';
import { EventComponent } from './pages/event/event.component';
import { ModalLoginComponent } from './componentes/modal-login/modal-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LoadingComponent } from './componentes/loading/loading.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { AdminReposComponent } from './pages/admin-repos/admin-repos.component';
import { AdminPreguntasComponent } from './pages/admin-preguntas/admin-preguntas.component';
import { AdminEventosComponent } from './pages/admin-eventos/admin-eventos.component';
import { AlertComponent } from './componentes/alert/alert.component'



@NgModule({
  declarations: [
    LoadingComponent,
    AppComponent,
    LoginComponent,
    CardLoginComponent,
    WhatIsComponent,
    RepositoriesComponent,
    FrequentQuestionsComponent,
    EventComponent,
    ModalLoginComponent,
    HomeAdminComponent,
    AdminReposComponent,
    AdminPreguntasComponent,
    AdminEventosComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
