import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/httpService/http-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  
  isAlert = false;
  loading = false;
  configAlert = {};

  dataRepos = [
    {
      eventId: '',
      nombre: '',
      fecha: '',
      hora:'',
      tema: '',
      descripcion:''
    }
  ];

  textCardsAdmin = [

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

  configAlertTable = {
    type: 'warning',
    strong: 'Lo siento!',
    text: ` aun no tenenemos eventos disponibles.`

  }

  constructor(
    private readonly serviceHttp: HttpServiceService,
  ) { }

  ngOnInit(): void {
    this.viewEventos();
    this.viewForo();
  }

  viewEventos(){
    this.loading = true;

    this.serviceHttp.requestHttp('get', `${environment.API}evento`).subscribe(
      reponse => {
        this.loading = false;

        if (reponse.body.users.length > 0) {
          this.dataRepos = reponse.body.users
        } else {
          this.dataRepos = []
          this.isAlert = true;
          this.configAlert = this.configAlertTable
        }


      },
      error => {
        this.loading = false;
        this.isAlert = true;
        this.configAlert = this.configAlertTable;

      })

  }
  viewForo(){
    
    this.loading = true;

    this.serviceHttp.requestHttp('get', `${environment.API}foro`).subscribe(
      reponse => {
        this.loading = false;

        if (reponse.body.users.length > 0) {
          this.dataRepos = reponse.body.users
        } else {
          this.dataRepos = []
          this.isAlert = true;
          this.configAlert = this.configAlertTable
        }


      },
      error => {
        this.loading = false;
        this.isAlert = true;
        this.configAlert = this.configAlertTable;

      })
  }

}
