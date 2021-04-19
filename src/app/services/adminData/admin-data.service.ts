import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {
  isAdmin= false;
  name='';
  dataEventos = {
    eventId: '',
    nombre: '',
    fecha: '',
    hora:'',
    tema: '',
    descripcion:''
   
  } ;
  asistentes = [
    {
      name: '',
      email: ''
    }
  ]

  constructor() { }
}
