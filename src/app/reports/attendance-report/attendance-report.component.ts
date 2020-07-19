import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IEmployee } from 'src/app/_model/employee';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.scss']
})
export class AttendanceReportComponent implements OnInit {

  atdlist:any;
  daterangepickerModel: Date[];
  constructor(private api:EmployeeService) { }

  ngOnInit(): void {
    this.api.getAttendanceslist().subscribe(data=>{

        this.atdlist=data;


    })

  }

  onSumbit(){}

}
