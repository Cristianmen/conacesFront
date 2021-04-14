import { Component } from '@angular/core';
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

    public readonly AdminService: AdminDataService,
  ){

    this.isAdmin = this.AdminService.isAdmin;
    this.name = this.AdminService.name;
  }
}
