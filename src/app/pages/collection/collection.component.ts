import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  name = 'Angular';

  ischecked: boolean = false
  checkAllTrades: boolean = false
  checkboxes = [
    { label: 'check 1', selected: false },
    { label: 'check 2', selected: false },
    { label: 'check 3', selected: false },
    { label: 'check 4', selected: false }
  ];

  toggleCheckboxAll(event:any) {
    const checked = event.target.checked;
    this.checkboxes.forEach(item => item.selected = checked);
  }

  singleCheckbox(event:any) {
    if (event.target.checked == true) {
      this.ischecked = true;
      console.log(this.ischecked)
    }

    if (this.ischecked && this.checkAllTrades) {
      event.target.checked = true;
      console.log(event.target.checked)
    }
  }

}
