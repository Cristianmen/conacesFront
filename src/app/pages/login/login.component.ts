import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  icon = 'fa-cog'
  text = 'La comisión Nacional de Aseguramiento de Calidad de la educación Superior .(Ampliar)'
  tittle = 'QUE ES LA CONACES'
  constructor() { }

  ngOnInit(): void {
  }

}
