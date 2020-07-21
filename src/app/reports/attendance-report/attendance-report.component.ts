import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { IEmployee } from 'src/app/_model/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { IAllPunchinList } from 'src/app/_model/attendance';
import * as moment from 'moment';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.scss']
})
export class AttendanceReportComponent implements OnInit {
  show: boolean = false;
  atdlist:any;
  employees:IEmployee[];
  obj:any={

      "emp_id":"all",
      "startIn": "2020-07-20 06:39:51",
      "endIn": "2020-07-21 07:40:14"

  };



  constructor(private api:EmployeeService) { }

  ngOnInit(): void {
    this.api.getAttendanceslistbydate(this.obj).subscribe(data=>{

      this.atdlist=data;

     });
     this.api.GetEmployeeList().subscribe(data=>{

      this.employees=data;
     })

  }



  onSumbit(){
const punchInfrom = moment(this.myForm.controls['startIn'].value).format('YYYY/MM/DD HH:mm:ss');
const punchInTo = moment(this.myForm.controls['endIn'].value).format('YYYY/MM/DD HH:mm:ss');

    this.myForm.patchValue({
      startIn:punchInfrom ,
      endIn:punchInTo


    })
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.value, null, 4));

this.api.getAttendanceslistbydate(this.myForm.value).subscribe(data=>{

 this.atdlist=data;

});

  }

  myForm = new FormGroup({
    emp_id:new FormControl,
    startIn: new FormControl(new Date()),
    endIn: new FormControl(new Date())



  });

}
