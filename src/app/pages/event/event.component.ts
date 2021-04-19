import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/httpService/http-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  formForo: FormGroup;
  
  isAlert = false;
  loading = false;
  configAlert = {};

  dataEvents = [
    {
      eventId: '',
      nombre: '',
      fecha: '',
      hora:'',
      tema: '',
      descripcion:''
    }
  ];

  dataForo = [
    {
      foroId: '',
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

  temas = [
    "administración de empresa",
    "universitaria arquitectura",
    "biologia",
    "biotecnologia",
    "ciencias-politicas",
    "comercio internacional",
    "universitaria comunicación social",
    "contaduria",
    "universitaria derecho",
    "universitaria diseño de modas",
    "universitaria diseño gráfico",
    "universitaria diseño industrial",
    "universitaria economía",
    "educacion-fisica",
    "universitaria enfermería",
    "universitaria finanzas",
    "universitaria gastronomía",
    "universitaria ingeniería ambiental",
    "universitaria ingeniería civil",
    "universitaria ingeniería de sistemas",
    "universitaria ingeniería industrial",
    "universitaria ingeniería mecánica",
    "universitaria licenciatura en idiomas y lengua extranjera",
    "universitaria matemáticas",
    "universitaria medicina",
    "universitaria medicina veterinaria",
    "universitaria mercadeo y publicidad",
    "universitaria música",
    "universitaria odontología",
    "universitaria optometria",
    "universitaria psicología"
   
  ];

  configAlertTable = {
    type: 'warning',
    strong: 'Lo siento!',
    text: ` aun no tenenemos eventos disponibles.`

  }

  constructor(
    private readonly serviceHttp: HttpServiceService,
    private readonly fb: FormBuilder,
  ) {


    this.formForo = this.fb.group({
    
      tema: new FormControl('', [
        Validators.required
      ]),
      descripcion: new FormControl('', [
        Validators.required
      ])

    });
   }

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
          this.dataEvents = reponse.body.users
        } else {
          this.dataEvents = []
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

  eliminar(i: any){}
  viewForo(){
    
    this.loading = true;

    this.serviceHttp.requestHttp('get', `${environment.API}foro`).subscribe(
      reponse => {
        this.loading = false;

        if (reponse.body.users.length > 0) {
          this.dataForo = reponse.body.users
        } else {
          this.dataForo = [];
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

  enviarForo(){

    this.loading = true;
    this.isAlert = false;
    const date = new Date();

    const body = {
      foroId:`${Date.parse(date.toString())}`, 
      tema: 'Prueba',
      descripcion:this.getdescripcion()?.value
    }
    this.serviceHttp.requestHttp('post', `${environment.API}foro`, body).subscribe(
      reponse => {
        this.loading = false;
        this.dataForo = []
        this.viewForo()
       
        console.log('reponse', reponse);
       

      },
      error => {
        this.loading = false;
      
        console.log('error', error);

      })




  }
  gettema() {
    return this.formForo.get('tema');
  }

  getdescripcion() {
    return this.formForo.get('descripcion');
  }


}
