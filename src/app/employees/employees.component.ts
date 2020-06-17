import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { AlertifyService } from '../_services/alertify.service';
import { IEmployee } from '../_model/employee';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {


  name:string;
  position:string;
  code:string;
  phone:string;

  constructor(private empService:EmployeeService,private alert:AlertifyService ) { }

  ngOnInit(): void {
  }

  createNewRecord(){
     let record ={};
     record['name']=this.name;
     record['position']=this.position;
     record['code']=this.code;
     record['phone']=this.phone;


    this.empService.createNewEmployee(record).then((res)=>{

    this.alert.success('sucess');


    });

  }

}
