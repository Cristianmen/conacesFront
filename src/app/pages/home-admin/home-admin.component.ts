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
      text: 'La comisión Nacional de Aseguramiento de Calidad de la educación Superior .(Ampliar)',
      tittle: 'ADMINISTRAR REPOSITORIOS'
    },
    
    {
      icon: 'fa-question-circle',
      text: 'La comisión Nacional de Aseguramiento de Calidad de la educación Superior .(Ampliar)',
      tittle: 'ADMINISTRAR PREGUNTAS FRECUENTES'
    },
    {
      icon: 'fa-calendar-alt',
      text: 'La comisión Nacional de Aseguramiento de Calidad de la educación Superior .(Ampliar)',
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
