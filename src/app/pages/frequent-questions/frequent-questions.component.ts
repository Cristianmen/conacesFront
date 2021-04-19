import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminDataService } from 'src/app/services/adminData/admin-data.service';
import { HttpServiceService } from 'src/app/services/httpService/http-service.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-frequent-questions',
  templateUrl: './frequent-questions.component.html',
  styleUrls: ['./frequent-questions.component.scss']
})
export class FrequentQuestionsComponent implements OnInit {
  
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


  configAlertTable = {
    type: 'warning',
    strong: 'Lo siento!',
    text: ` No hay preguntas frecuentes.`

  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly serviceHttp: HttpServiceService,
    private readonly AdminService: AdminDataService,
  ) {
    this.formPreg = this.fb.group({
           
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
       )
    }
  } 

}
