import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  record = new FormGroup({
      joggingDate: new FormControl(''),
    distance: new FormControl(''),
    time: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  SaveButtonClick() {
    console.log(this.record.value);
  }
}
