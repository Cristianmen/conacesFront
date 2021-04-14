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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardLoginComponent,
    WhatIsComponent,
    RepositoriesComponent,
    FrequentQuestionsComponent,
    EventComponent,
    ModalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
