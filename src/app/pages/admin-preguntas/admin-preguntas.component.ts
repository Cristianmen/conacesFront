import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminDataService } from 'src/app/services/adminData/admin-data.service';
import { HttpServiceService } from 'src/app/services/httpService/http-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-preguntas',
  templateUrl: './admin-preguntas.component.html',
  styleUrls: ['./admin-preguntas.component.scss']
})
export class AdminPreguntasComponent implements OnInit {

  formPreg: FormGroup;
  isAlert = false;
  loading = false;
  configAlert = {};

  dataRepos = [
    {
      preguntasId: '',
      descripcion: ''
    }
  ];

  formType = true

  configAlertSuccess = {
    type: 'success',
    strong: 'Registo Exitoso!',
    text: `La pregunta se almaceno correctamente.`

  }

  
  configAlertSuccessDelete = {
    type: 'success',
    strong: 'Eliminación Exitosa!',
    text: `La pregunta se borro correctamente.`

  }
  configAlertError = {
    type: 'warning',
    strong: 'Algo salio mal!',
    text: ` verifica con los campos ingresados.`

  }

  configAlertTable = {
    type: 'warning',
    strong: 'Lo siento!',
    text: ` aun no tenenemos preguntas disponibles.`

  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly serviceHttp: HttpServiceService,
    private readonly AdminService: AdminDataService,
  ) {
    this.formPreg = this.fb.group({
      pregunta: new FormControl('', [
        Validators.required
      ]),
      respuesta: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
    this.isAlert = false;
    this.dataRepos = [
      {
        preguntasId: '',
        descripcion: ''
      }
    ];
  }

  enviar() {
    this.loading = true;
    this.isAlert = false;

    const body = {
      preguntasId: this.getPreg()?.value,
      descripcion: this.getRespu()?.value
    }

    this.serviceHttp.requestHttp('post', `${environment.API}preguntas`, body).subscribe(
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
  view(view: boolean) {
    this.isAlert = false;
    this.formType = view;

    if (!view) {
      this.loading = true;

      this.serviceHttp.requestHttp('get', `${environment.API}preguntas`).subscribe(
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
  eliminar(index: any) {
    this.loading = true;
    this.isAlert = false;

    const body = {
      preguntasId: this.dataRepos[index].preguntasId,
    }

    this.serviceHttp.requestHttp('delete', `${environment.API}preguntas`, body).subscribe(
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


  getPreg() {
    return this.formPreg.get('pregunta');
  }

  getRespu() {
    return this.formPreg.get('respuesta');
  }

}
