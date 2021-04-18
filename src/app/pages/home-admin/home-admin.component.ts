import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDataService } from 'src/app/services/adminData/admin-data.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {


  textCardsAdmin = [

    {
      icon: 'fa-download',
      text: 'Permite la administración de los repositoros (crear y borrar)',
      tittle: 'ADMINISTRAR REPOSITORIOS'
    },
    
    {
      icon: 'fa-question-circle',
      text: 'Permite la administración de Preguntas frecuentes (crear y borrar)',
      tittle: 'ADMINISTRAR PREGUNTAS FRECUENTES'
    },
    {
      icon: 'fa-calendar-alt',
      text: 'Permite la administración de los Eventos (crear y borrar)',
      tittle: 'ADMINISTRAR EVENTOS'
    },

  ];


  constructor(
    private readonly router : Router,
    public readonly AdminService: AdminDataService,
  ) { }

  ngOnInit(): void {
  }

  goToviews(view: string){
    this.router.navigate([view]);
    
  }

}
