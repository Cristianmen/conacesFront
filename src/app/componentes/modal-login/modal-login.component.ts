import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/httpService/http-service.service';
import { AdminDataService } from 'src/app/services/adminData/admin-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  formLogin: FormGroup;

  configAlert = { 
    type:'warning',
    strong: 'Algo salio mal!',
    text: ' por favor verifica tus datos.'

  }

  loading = false;
  alertError = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly serviceHttp: HttpServiceService,
    private readonly AdminService: AdminDataService,
    private readonly router: Router
  ) {
    this.formLogin = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(8)
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });

  }

  ngOnInit(): void {
  }

  
  enviar() {
    this.loading = true;
    this.alertError = false;

    const body = {
      userId: this.getUser()?.value,
      pass: this.getPass()?.value
    }
    this.serviceHttp.requestHttp('post', `${environment.API}login`, body).subscribe(
      reponse => {
        console.log('reponse', reponse);
        this.loading = false;
        this.AdminService.isAdmin = true;
        this.AdminService.name = reponse.body.users.name;
        this.router.navigate(['/home'])
        this.cerrarModal();
      },
      error => {
        this.alertError = true;
        console.log('error', error);
        this.loading = false;
      }

    );

    console.log('user', this.getUser()?.value);


  }

  cerrarModal() {
    console.log('cerrar');
    
     document.getElementById("btn-modal")?.click();
  
  }

  getUser() {
    return this.formLogin.get('username');
  }

  getPass() {
    return this.formLogin.get('password');
  }

}
