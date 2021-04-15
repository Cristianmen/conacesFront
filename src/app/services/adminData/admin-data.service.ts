import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {
  isAdmin= false;
  name='';

  constructor() { }
}
