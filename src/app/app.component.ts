import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDataService } from './services/adminData/admin-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CONACES';

  isAdmin = false;
  name = '';

  constructor(
    private readonly router : Router,
    public readonly AdminService: AdminDataService,
  ){

    this.isAdmin = this.AdminService.isAdmin;
    this.name = this.AdminService.name;
  }

  cerrar(){
    this.AdminService.isAdmin = false;
    this.router.navigate(['/login']);
  }
}
