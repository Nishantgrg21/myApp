import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
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
export class RegisterComponent implements OnInit {

  constructor() { }
  
  email = new FormControl('', [Validators.required, Validators.email]);


  UserData:any;
  addUser(value: any){
    this.UserData = value;
    console.log(this.UserData);
  }

  ngOnInit(): void {
  }

 
  


}
