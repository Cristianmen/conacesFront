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
      text: 'realiza la consulta de los documentos y lineamientos relacionados con la CONACES.',
      tittle: 'REPOSITORIOS'
    },
    
    {
      icon: 'fa-question-circle',
      text: 'En esta seccion encuentras las preguntas frecuentes.',
      tittle: 'PREGUNTAS FRECUENTES'
    },
    {
      icon: 'fa-calendar-alt',
      text: 'Entérate y participa en nuestros eventos',
      tittle: 'EVENTOS'
    },
    {
      icon: 'fa-users',
      text: 'Participa en nuestro for y deja tus comentarios',
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
