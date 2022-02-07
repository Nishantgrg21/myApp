import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // @ViewChild('select') select!: MatSelect;

  // allSelected = false;
  // foods: any[] = [
  //   { value: 'steak-0', viewValue: 'Steak' },
  //   { value: 'pizza-1', viewValue: 'Pizza' },
  //   { value: 'tacos-2', viewValue: 'Tacos' },
  // ];
  // toggleAllSelection() {
  //   if (this.allSelected) {
  //     this.select.options.forEach((item: MatOption) => item.select());
  //   } else {
  //     this.select.options.forEach((item: MatOption) => item.deselect());
  //   }
  // }
  // optionClick() {
  //   let newStatus = true;
  //   this.select.options.forEach((item: MatOption) => {
  //     if (!item.selected) {
  //       newStatus = false;
  //     }
  //   });
  //   this.allSelected = newStatus;
  // }
}