import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  myForm: FormGroup;
  bsInlineValue = new Date();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.myForm = this.formBuilder.group({
      date: null,
      range: null
    });

  }

}
