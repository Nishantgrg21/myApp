import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-overview',
  templateUrl: './portfolio-overview.component.html',
  styleUrls: ['./portfolio-overview.component.css'],
  animations:[
    trigger('myanimate1', [
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
         transform: 'scale(1.5)',
         color:'#DF8F01'
       })),
      
      transition('initial<=>final', animate('300ms linear'        
      ))        
    ]),
    trigger('myanimate2', [
      state('initial',
        style({
          'font-size':' 2.5rem',
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
    ]),
    trigger('myanimate3', [
      state('initial',
        style({
        })),
      state('final',
        style({            
          background: 'transparent linear-gradient(180deg, #DF8F01 0%, #A95C06 100%) 0% 0% no-repeat padding-box',
          boxShadow: '0px 3px 6px #000000D1',
          color: '#292929'
       })),
      
      transition('initial<=>final', animate('300ms linear'        
      ))        
    ]),
  ]
})
export class PortfolioOverviewComponent implements OnInit {
  accountToAmount:any = "By Account";


  constructor() { }
  
 
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

  dropdownData: any =[
    "Bucket 1", "Bucket 2" ,"Bucket 3","Bucket 4"
  ]

  dropdownContent:  any;

  ngOnInit(): void {
    this.dropdownContent = true;
  }

   
  SelectedValue:any ="Bucket 3";
  onChange1(data:any){
    this.SelectedValue = data;
  console.log(this.SelectedValue);

  }

 
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  

}
