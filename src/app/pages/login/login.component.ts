import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  textCards = [
    {
      icon: 'fa-cog',
      text: 'La comisión Nacional de Aseguramiento de Calidad de la educación Superior .(Ampliar)',
      tittle: 'QUE ES LA CONACES'
    },
    {
      icon: 'fa-download',
      text: 'La comisión Nacional de Aseguramiento de Calidad de la educación Superior .(Ampliar)',
      tittle: 'REPOSITORIOS'
    },
    
    {
      icon: 'fa-question-circle',
      text: 'La comisión Nacional de Aseguramiento de Calidad de la educación Superior .(Ampliar)',
      tittle: 'PREGUNTAS FRECUENTES'
    },
    {
      icon: 'fa-calendar-alt',
      text: 'La comisión Nacional de Aseguramiento de Calidad de la educación Superior .(Ampliar)',
      tittle: 'EVENTOS'
    },
    {
      icon: 'fa-users',
      text: 'La comisión Nacional de Aseguramiento de Calidad de la educación Superior .(Ampliar)',
      tittle: 'FORO'
    }
  ];


  constructor(
    private readonly router : Router
  ) { }

  ngOnInit(): void {
  }

  goToviews(view: string){
    this.router.navigate([view]);
    
  }


}
