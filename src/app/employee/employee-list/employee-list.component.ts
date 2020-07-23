import { Component, OnInit } from '@angular/core';
import {IEmployee } from 'src/app/_model/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, BehaviorSubject } from 'rxjs';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IAttendance } from 'src/app/_model/attendance';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  showThisContent$;

  editEmployee:IEmployee;
  atd:any;
  employees: IEmployee[];


  constructor(
    public crudApi: EmployeeService,
    public toastr: ToastrService,
    private cusservice:CustomerService
    ){ }


  ngOnInit(): void {
    this.getEmployees();
    this.showThisContent$ =  new BehaviorSubject(false);


  }
  getEmployees() {
    this.crudApi.GetEmployeeList().subscribe(response => {
      this.employees = response;
    }, error => {
      console.log(error);
    });
  }



  showContent(employee:IEmployee){

    this.showThisContent$.next(true);
    this.editEmployee=employee;

    this.crudApi.checkAttendanceStatus(this.editEmployee.id).subscribe(data=>
      {
        this.crudApi.showPuchOutContent$.next(true);

        this.atd=data;
     },(error)=>
      {
        this.toastr.warning("No Punch in AVailable");


      })

  }




  deleteEmployee(id:number) {
    if (window.confirm('This prcoess will delete documents too are you sure want to continue ?')) {

      this.crudApi.DeleteDocuments(id).subscribe();
      this.crudApi.DeleteEmployee(id).subscribe(response =>{

          this.toastr.success('successfully deleted!');
          this.cusservice.refresh();


        });
       // Alert message will show up when student successfully deleted.
    }
  }

}
