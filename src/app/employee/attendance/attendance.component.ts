import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { IEmployee } from 'src/app/_model/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { IAttendance } from 'src/app/_model/attendance';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {



  @Input() employee: IEmployee;
  attendance:IAttendance;



  constructor(public api:EmployeeService, public toastr: ToastrService
  ) {


  }

  ngOnInit(): void {



  }

  myForm = new FormGroup({
    emp_id:new FormControl,
    punchIn: new FormControl(new Date()),
    punchtime: new FormControl(new Date()),
    punchOut: new FormControl(new Date()),


  });

  myForm2 = new FormGroup({
    emp_id:new FormControl,
    punchOut: new FormControl(new Date()),
    punchtime: new FormControl(new Date()),
  });

  onSubmit(){

const punchD = moment(this.myForm.controls['punchIn'].value).format('YYYY/MM/DD');
const punchT=  moment(this.myForm.controls['punchtime'].value).format('HH:mm:ss');

    this.myForm.patchValue({
      punchIn: punchD +" " + punchT,
      punchOut:'1986/12/24 08:00:00',


    })

    console.log(this.myForm.value);

this.api.employeePunchIn(this.myForm.value).subscribe(data=>{
  this.toastr.success(' successfully Added!');

  },(error)=>
  {

    this.toastr.error("error occured");
  }
  );


  }



  onSubmitPunchOut(){

    const punchD = moment(this.myForm2.controls['punchOut'].value).format('YYYY/MM/DD');
    const punchT=  moment(this.myForm2.controls['punchtime'].value).format('HH:mm:ss');

        this.myForm2.patchValue({
          punchOut: punchD +" " + punchT })


    this.api.employeePunchOut(this.myForm2.value).subscribe(data=>{
      this.toastr.success(' successfully updated!');

      });


      }



}



