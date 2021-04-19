import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminDataService } from 'src/app/services/adminData/admin-data.service';
import { HttpServiceService } from 'src/app/services/httpService/http-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-eventos',
  templateUrl: './admin-eventos.component.html',
  styleUrls: ['./admin-eventos.component.scss']
})
export class AdminEventosComponent implements OnInit {
  formEvent: FormGroup;
  isAlert = false;
  loading = false;
  isModificar = false;
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

  formType = true

  configAlertSuccess = {
    type: 'success',
    strong: 'Registo Exitoso!',
    text: ` El evento se almaceno correctamente.`

  }

  
  configAlertSuccessDelete = {
    type: 'success',
    strong: 'Eliminación Exitosa!',
    text: ` El evento se borro correctamente.`

  }
  configAlertError = {
    type: 'warning',
    strong: 'Algo salio mal!',
    text: ` verifica con los campos ingresados.`

  }

  configAlertTable = {
    type: 'warning',
    strong: 'Lo siento!',
    text: ` aun no tenenemos eventos disponibles.`

  }

  horas = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00"
   
  ]

  temas = [
    "administración de empresa",
    "universitaria arquitectura",
    "biologia",
    "biotecnologia",
    "ciencias politicas",
    "comercio internacional",
    "universitaria comunicación social",
    "contaduria",
    "universitaria derecho",
    "universitaria diseño de modas",
    "universitaria diseño gráfico",
    "universitaria diseño industrial",
    "universitaria economía",
    "educacion fisica",
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
   
  ]

  constructor(
    private readonly fb: FormBuilder,
    private readonly serviceHttp: HttpServiceService,
    private readonly AdminService: AdminDataService,
  ) {
    this.formEvent = this.fb.group({
      nombre: new FormControl('', [
        Validators.required
      ]),
      fecha: new FormControl('', [
        Validators.required
      ]),
      hora: new FormControl('', [
        Validators.required
      ]),
      tema: new FormControl('', [
        Validators.required
      ]),
      descripcion: new FormControl('', [
        Validators.required
      ])

    });
   }

  ngOnInit(): void {
    this.isAlert = false;
    this.dataRepos = [
      {
        eventId: '',
        nombre: '',
        fecha: '',
        hora:'',
        tema: '',
        descripcion:''
      }
    ];
  }
  enviar(){
    this.loading = true;
    this.isAlert = false;

    const body = {
      eventId: this.getnombre()?.value,
      nombre: this.getnombre()?.value,
      fecha: this.getfecha()?.value,
      hora:this.gethora()?.value,
      tema: this.gettema()?.value,
      descripcion:this.getdescripcion()?.value
    }
    this.serviceHttp.requestHttp('post', `${environment.API}evento`, body).subscribe(
      reponse => {
        this.loading = false;
        this.isAlert = true;
        this.configAlert = this.configAlertSuccess;
        console.log('reponse', reponse);
       

      },
      error => {
        this.loading = false;
        this.isAlert = true;
        this.configAlert = this.configAlertError;
        console.log('error', error);

      })


  }

  modificar(index: any){
    this.isModificar =  true
    this.formType = true;

    this.getnombre()?.setValue( this.dataRepos[index].nombre);
    this.getfecha()?.setValue( this.dataRepos[index].fecha);
    this.gethora()?.setValue( this.dataRepos[index].hora);
    this.gettema()?.setValue( this.dataRepos[index].tema);
    this.getdescripcion()?.setValue( this.dataRepos[index].descripcion);


  }
  eliminar(i: any){
    this.loading = true;
    this.isAlert = false;

    const body = {
      eventId: this.dataRepos[i].eventId,
    }

    this.serviceHttp.requestHttp('delete', `${environment.API}evento`, body).subscribe(
      reponse => {
        this.loading = false;
        this.isAlert = true;
        this.configAlert = this.configAlertSuccessDelete;
        console.log('reponse', reponse);
        setTimeout(() => {
          
          this.dataRepos = []
          this.view(false);
        }, 2000);
       
      },
      error => {
        this.loading = false;
        this.isAlert = true;
        this.configAlert = this.configAlertError;
        console.log('error', error);

      })
  }
 
  view(view: boolean) {
    this.isAlert = false;
    this.formType = view;

    if (!view) {
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
  }

  getnombre() {
    return this.formEvent.get('nombre');
  }

  getfecha() {
    return this.formEvent.get('fecha');
  }
  gethora() {
    return this.formEvent.get('hora');
  }

  gettema() {
    return this.formEvent.get('tema');
  }

  getdescripcion() {
    return this.formEvent.get('descripcion');
  }

}
