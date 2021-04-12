import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss']
})
export class CardLoginComponent implements OnInit {

  @Input() icon  = '';
  @Input() tittle = '';
  @Input() text  = '';

  constructor() { }

  ngOnInit(): void {
  }

}
