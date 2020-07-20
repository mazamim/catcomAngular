import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IEmployee } from 'src/app/_model/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { IAllPunchinList } from 'src/app/_model/attendance';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.scss']
})
export class AttendanceReportComponent implements OnInit {
  show: boolean = false;
  atdlist:any;
  alllist:IAllPunchinList[];
  daterangepickerModel: Date[];
  constructor(private api:EmployeeService) { }

  ngOnInit(): void {
    this.api.getAttendanceslist().subscribe(data=>{

        this.atdlist=data;
    })

    this.api.checkallAttendance().subscribe(data=>{
       this.alllist= data;
   
    })


  }

  public itemshow(id:number): boolean
  
  {
    for(var i = 0; i < this.alllist.length; i++){
    
     if (this.alllist[i].emp_id==id) return true ;
  
  }

  }
  onSumbit(){}

}
