import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) {
    this.formLogin = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(5)
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });

   }

  ngOnInit(): void {
  }


  enviar(){
    console.log('user', this.getUser()?.value);
    

  }

  getUser(){
    return this.formLogin.get('username');
  }

  getPass(){
    return this.formLogin.get('password');
  }

}
