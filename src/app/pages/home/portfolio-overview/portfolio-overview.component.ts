import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import pdata1 from '../portfolio-overview/data1.json';
import pdata2 from '../portfolio-overview/data2.json';
import { ViewEncapsulation } from '@angular/core';

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
  public Data1: {
    image: string;
    title: string;
    amount: string;
    percent: string;
  }[] = pdata1;
  public Data2: {
    image: string;
    title: string;
    amount: string;
    percent: string;
  }[] = pdata2;

  constructor(public dialog: MatDialog) {}

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

  dropdownData: any = ['Bucket 1', 'Bucket 2', 'Bucket 3', 'Bucket 4'];

  dropdownContent: any;
  dropdownCheckboxContent: any;
  checkboxContent: any;
  checkboxButton: any;
  ngOnInit(): void {
    this.dropdownContent = true;
    this.dropdownCheckboxContent = true;
    this.checkboxContent = true;
    this.checkboxButton = true;
    this.setBucketListLoanData();
  }

  SelectedValue: any = 'Bucket 3';
  onChange1(data: any) {
    this.SelectedValue = data;
    // console.log(this.SelectedValue);
  }

  // Checkbox button
  bucketList!: any[];
  setBucketListLoanData() {
    this.bucketList = [
      { id: 1, value: 'Credit Card', submenu: [] },
      {
        value: 'Loan',
        submenu: [
          { id: 1, checked: true, submenuOption: 'Home Loan' },
          { id: 2, checked: true, submenuOption: 'Loan Against Property' },
          { id: 3, checked: true, submenuOption: 'Pay Day Loan' },
          { id: 4, checked: true, submenuOption: 'Personal Loan' },
          { id: 5, checked: true, submenuOption: 'Business Loan' },
        ],
      },
    ];
  }

  // selection = [
  //   {  submenuOption: 'Home Loan'},
  //   {  submenuOption: 'Business Loan'},
  // ];

  // dropdownDataNew: any =[
  //   // {value1:"Credit Card",
  //   //  option:'Credit Card',
  //   //   expand:false,
  //   //  submenu:[]
  //   // },
  //   // {value2:"Loan",
  //   //  option:'Credit Card',
  //   //   expand:false,
  //   //   submenu: [
  //   //   {check: true, submenuOption: 'Home Loan'},
  //   //   {check: true, submenuOption: 'Loan Against Property'},
  //   //   {check: true, submenuOption: 'Pay Day Loan'},
  //   //   {check: true, submenuOption: 'Personal Loan'},
  //   //   {check: true, submenuOption: 'Business Loan'},
  //   //   ]}
  // ]

  NewSelectedValue: any = 'Credit Card';
  onChange2(data: any) {
    this.NewSelectedValue = data.value;
  }

  ischecked: boolean = false;
  checkAllTrades: boolean = false;
  checkdArray: Array<any> = [];
  checkedValue = [
    { name: 'Live', selected: false },
    { name: 'Pre-NPA', selected: false },
    { name: 'NPA', selected: false },
  ];

  SelectedCheckedValue: any = 'Live';

  onCheck(event: any) {
    if (event.target.checked == true) {
      this.ischecked = true;
    }
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
