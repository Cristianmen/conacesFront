import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/httpService/http-service.service';
import { AdminDataService } from 'src/app/services/adminData/admin-data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  isAlert = false;
  loading = false;
  configAlert = {};

  dataRepos = [
    {
      repoId: '',
      content: ''
    }
  ];


  configAlertError = { 
    type:'warning',
    strong: 'Algo salio mal!',
    text: ` intentalo mas tarde.`

  }


  configAlertTable = {
    type: 'warning',
    strong: 'Lo siento!',
    text: ` aun no tenenemos repositorios disponibles.`

  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly serviceHttp: HttpServiceService,
    private readonly AdminService: AdminDataService,
  ) {

  }

  ngOnInit(): void {
    this.isAlert = false;
    this.dataRepos = [
      {
        repoId: '',
        content: ''
      }
    ];
    this.view();
  }


  view() {
    this.isAlert = false;

    this.loading = true;
    this.serviceHttp.requestHttp('get', `${environment.API}repositorios`).subscribe(
      reponse => {
        this.loading = false;

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

      })


  }

  ver(index: any) {
    const win = window.open(this.dataRepos[index].content, '_blank');
    win?.focus();

  }


}
