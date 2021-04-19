import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminDataService } from 'src/app/services/adminData/admin-data.service';
import { HttpServiceService } from 'src/app/services/httpService/http-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.scss']
})
export class SuscripcionComponent implements OnInit {

  formSus: FormGroup;
  loading = false;
  isAlert = false;

  configAlert = {};

  configAlertSuccess = {
    type: 'success',
    strong: 'Exitoso!',
    text: ` se suscribio correctamente.`

  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly serviceHttp: HttpServiceService,
    private readonly AdminService: AdminDataService,
  ) {
    this.formSus = this.fb.group({

      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ])

    });

  }

  ngOnInit(): void {
  }

  enviar() {
    this.loading = true;
    const data = {
      name: this.getname()?.value,
      email: this.getEmil()?.value
    }
    this.AdminService.asistentes.push(data)



    let body = {
      eventId: this.AdminService.dataEventos.eventId,
      nombre: this.AdminService.dataEventos.nombre,
      fecha: this.AdminService.dataEventos.fecha,
      hora: this.AdminService.dataEventos.hora,
      tema: this.AdminService.dataEventos.tema,
      descripcion: this.AdminService.dataEventos.descripcion,
      asistentes:  this.AdminService.asistentes
    }


    this.serviceHttp.requestHttp('post', `${environment.API}evento`, body).subscribe(
      reponse => {
        this.loading = false;
        this.isAlert = true;
        this.configAlert = this.configAlertSuccess;
        this.getname()?.setValue('');
        this.getEmil()?.setValue('');


      },
      error => {
        this.loading = false;


        console.log('error', error);

      })
  }




  getname() {
    return this.formSus.get('name');
  }

  getEmil() {
    return this.formSus.get('email');
  }

}
