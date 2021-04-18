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

  
  

  configAlertTable = { 
    type:'warning',
    strong: 'Lo siento!',
    text: ` aun no tenenemos repositorios disponibles.`

  }
  
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


}
