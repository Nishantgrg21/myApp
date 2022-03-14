import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('myAnimation1', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('5000ms ease-in-out', style({ transform: 'translateX(0%)','opacity': 1}))
    ]),
    ]),

    

    trigger('myAnimation2', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('5000ms ease-in-out', style({ transform: 'translateX(0%)','opacity': 1}))
    ]),
    ]),
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

}
