import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import pdata1 from '../portfolio-overview/data1.json';
import pdata2 from '../portfolio-overview/data2.json';
import { ViewEncapsulation } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-portfolio-overview',
  templateUrl: './portfolio-overview.component.html',
  styleUrls: ['./portfolio-overview.component.css'],
  animations: [
    trigger('myanimate1', [
      state(
        'initial',
        style({
          position: 'relative',
          color: 'white',
          display: 'flex',
          'align-items': 'flex-end',
          cursor: 'pointer',
        })
      ),
      state(
        'final',
        style({
          transform: 'scale(1.5)',
          color: '#DF8F01',
        })
      ),

      transition('initial<=>final', animate('300ms linear')),
    ]),
    trigger('myanimate2', [
      state(
        'initial',
        style({
          'font-size': ' 2.5rem',
          display: 'flex',
          'align-items': 'flex-end',
        })
      ),
      state(
        'final',
        style({
          transform: 'scale(1.3)',
          color: '#DF8F01',
        })
      ),

      transition('initial<=>final', animate('300ms linear')),
    ]),
    trigger('myanimate3', [
      state('initial', style({})),
      state(
        'final',
        style({
          background:
            'transparent linear-gradient(180deg, #DF8F01 0%, #A95C06 100%) 0% 0% no-repeat padding-box',
          boxShadow: '0px 3px 6px #000000D1',
          color: '#292929',
        })
      ),

      transition('initial<=>final', animate('300ms linear')),
    ]),
  ],
})




export class PortfolioOverviewComponent implements OnInit {
  accountToAmount: any = 'By Account';
   Data1: {
    image: string;
    title: string;
    amount: string;
    percent: string;
  }[] = pdata1 ;

  Data2 : {
    image: string,
    title: string,
    amount: string,
    percent: string,
  }[] = pdata2;
  checkedData: any;

  constructor(public dialog: MatDialog) {
    
  
  }

  openDialog() {
    const dialogRef = this.dialog.open(ExportMasterReportDialog, {
      panelClass: 'custom-dialog-container1',
      // height: '430px',
      // width: '500px',
    });

    dialogRef.afterClosed();
  }

  animateState2: string = 'initial';
  animateState1: string = 'final';

  stateName1() {
    this.animateState1 = 'final';
    this.animateState2 = 'initial';
  }

  stateName2() {
    this.animateState1 = 'initial';
    this.animateState2 = 'final';
  }

  
  
  dropdownContent: boolean = true;
  dropdownContent2:boolean = true;
  checkboxButton: boolean = true;

  ngOnInit(): void {
    this.dropdownContent = true;
    this.dropdownContent2 = true;
    this.SelectedChecked   = new Array<string>("Live");
  }


  dropdownData = ['Bucket 1', 'Bucket 2', 'Bucket 3', 'Bucket 4']
  SelectedData = 'Bucket 3';
  onChange(data: string) {
    this.SelectedData = data;
  }

  
  dropdownData2 = [ "March'21", "May' 21", "April' 21" ]
  SelectedData2 = "March'21";
  onChange2(data: string) {
    this.SelectedData2 = data;
  }
  


// Checkbox Button Start
  CheckedList = [
    { id:1,name: 'Live', isselected: true },
    {id:2, name: 'Pre-NPA', isselected: false }, 
    {id:3, name: 'NPA', isselected: false },
  ];


  SelectedChecked :any= "Live";
  onChange1(event: any,name:string){
    if(event.target.checked== true){
      
      //console.log(name + "checked");
      
       this.SelectedChecked.push(name);
       this.SelectedChecked = this.SelectedChecked.filter((m: any)=>m=name);
    }
    else {
     // console.log(name + "unchecked");
       this.SelectedChecked = this.SelectedChecked.filter((m: any)=>m!=name);
    }
   


    
    console.log( this.SelectedChecked);
  }

  
  



  
}








// Modal Component Start
@Component({
  selector: 'export-master-report-dialog',
  templateUrl: 'export-master-report-dialog.html',
  styleUrls: ['export-master-report-dialog.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ExportMasterReportDialog {
  constructor(public dialogRef: MatDialogRef<ExportMasterReportDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
function e(e: any) {
  throw new Error('Function not implemented.');
}

