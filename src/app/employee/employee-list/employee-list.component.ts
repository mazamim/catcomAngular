import { Component, OnInit } from '@angular/core';
import {IEmployee } from 'src/app/_model/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {


  employees: IEmployee[];


  constructor(
    public crudApi: EmployeeService,
    public toastr: ToastrService
    ){ }


  ngOnInit(): void {
    this.getEmployees();


  }
  getEmployees() {
    this.crudApi.GetEmployeeList().subscribe(response => {
      this.employees = response;
    }, error => {
      console.log(error);
    });
  }




  deleteEmployee(id) {
    if (window.confirm('Are sure you want to delete this emploee ?')) {
        this.crudApi.DeleteEmployee(id).subscribe(response =>{

          this.toastr.success('successfully deleted!');


        });
       // Alert message will show up when student successfully deleted.
    }
  }

}
