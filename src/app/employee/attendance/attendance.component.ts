import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { IEmployee } from 'src/app/_model/employee';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  myForm: FormGroup;
  bsValue = new Date();
  @Input() employee: IEmployee;


  constructor() {


  }

  ngOnInit(): void {

  }




}
