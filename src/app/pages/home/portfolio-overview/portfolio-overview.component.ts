import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-overview',
  templateUrl: './portfolio-overview.component.html',
  styleUrls: ['./portfolio-overview.component.css'],
  animations:[
    trigger('animate1', [
      state('initial',
        style({
          position: 'relative',
          color:'white',
          display: 'flex',
          'align-items': 'flex-end',
          cursor: 'pointer',
        })),
      state('final',
        style({            
         transform: 'scale(2.2)',
         color:'#DF8F01'
       })),
      
      transition('initial<=>final', animate('300ms linear'        
      ))        
    ]),
    trigger('animate2', [
      state('initial',
        style({
          'font-size':' 1.5rem',
          display: 'flex',
          'align-items': 'flex-end'
        })),
      state('final',
        style({            
         transform: 'scale(1.3)',
         color:'#DF8F01'
       })),
      
      transition('initial<=>final', animate('300ms linear'        
      ))        
    ])
  ]
})
export class PortfolioOverviewComponent implements OnInit {
  accountToAmount:any = "By Account";

  constructor() { }
  
  ngOnInit(): void {
  }

  animateState2:string='initial';
  animateState1:string='final';

  stateName1(){
    this.animateState1='final';
    this.animateState2='initial';
  }

  stateName2(){
    this.animateState1='initial';
    this.animateState2='final';
  }

}
