import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/httpService/http-service.service';
import { AdminDataService } from 'src/app/services/adminData/admin-data.service';
import { environment } from 'src/environments/environment';
import { rendererTypeName } from '@angular/compiler';

@Component({
  selector: 'app-admin-repos',
  templateUrl: './admin-repos.component.html',
  styleUrls: ['./admin-repos.component.scss']
})
export class AdminReposComponent implements OnInit {

  formRepo: FormGroup;
  isAlert = false;
  loading = false;
  configAlert = {};

  dataRepos = [
    {
      repoId:'',
      content:''
    }
  ];

  formType = false

  configAlertSuccess = { 
    type:'success',
    strong: 'Exitoso!',
    text: ` El documento se almaceno correctamente.`

  }
  configAlertError = { 
    type:'warning',
    strong: 'Algo salio mal!',
    text: ` valida el tamaño del documento.`

  }

  configAlertTable = { 
    type:'warning',
    strong: 'Lo siento!',
    text: ` aun no tenenemos repositorios disponibles.`

  }

  configAlertSuccessDelete = {
    type: 'success',
    strong: 'Eliminación Exitosa!',
    text: `el repositorio se borro correctamente.`

  }

  base64: any;
  constructor(
    private readonly fb: FormBuilder,
    private readonly serviceHttp: HttpServiceService,
    private readonly AdminService: AdminDataService,
  ) {
    this.formRepo = this.fb.group({
      repo: new FormControl('', [
        Validators.required
      ]),
      file: new FormControl('', [
        Validators.required
      ])
    });


   }

  ngOnInit(): void {
    this.isAlert = false;
    this.dataRepos = [
      {
        repoId:'',
        content:''
      }
    ];
  }

  enviar(){
    this.loading = true;
    this.isAlert = false;

    const body = {
      repoId: this.getRepo()?.value,
      content: this.base64 
    }

    this.serviceHttp.requestHttp('post', `${environment.API}repositorios`, body).subscribe(
      reponse => {
        this.loading = false;
        this.isAlert = true;

        if (reponse.body.users.length > 0) {
          this.dataRepos = reponse.body.users 
        } else {
          this.dataRepos = [] 
          this.configAlert = this.configAlertTable
        }
    
     
      },
      error => {
        this.loading = false;
        this.isAlert = true;
        this.configAlert = this.configAlertError;
        console.log('error', error);
       
      })

  }


  view(view:boolean){
    this.isAlert = false;
    this.formType = view;

    if (!view) {
      this.loading = true;

      this.serviceHttp.requestHttp('get', `${environment.API}repositorios`).subscribe(
        reponse => {
          this.loading = false;
          this.dataRepos = reponse.body.users  
        },
        error => {
          this.loading = false;
          this.isAlert = true;
          this.configAlert = this.configAlertTable;
         
        })
    }

  }

  ver(index: any){
    const win = window.open(this.dataRepos[index].content, '_blank');
    win?.focus();

  }

  eliminar(index: any){
    this.loading = true;
    this.isAlert = false;

    const body = {
      repoId: this.dataRepos[index].repoId,
    }

    this.serviceHttp.requestHttp('delete', `${environment.API}repositorios`, body).subscribe(
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

  loadFile(event: any){

    const input = event.target;
    this.getBase64(input.files[0]).then(
      data => {this.base64 = data}
    );

  }

   getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }


  getRepo() {
    return this.formRepo.get('repo');
  }

}
