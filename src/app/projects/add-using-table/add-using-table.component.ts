import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProject } from 'src/app/_model/project';
import { ProjectService } from 'src/app/_services/project.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/_services/customer.service';
import { ClientService } from 'src/app/_services/client.service';
import { ICustomer } from 'src/app/_model/customer';
import { IClient } from 'src/app/_model/client';
import { IEmployee } from 'src/app/_model/employee';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-add-using-table',
  templateUrl: './add-using-table.component.html',
  styleUrls: ['./add-using-table.component.scss']
})
export class AddUsingTableComponent implements OnInit {
  public taskForm: FormGroup;
  customers:ICustomer[];
  clients:IClient[];
  ticket:IProject;
  employees?:IEmployee[];
  @ViewChild('editForm',{static:true}) editForm: NgForm;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IProject,
  public crudApi: ProjectService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,
    private cusApi:CustomerService,
    private clientApi:ClientService,
    private empservice:EmployeeService) {}

  ngOnInit(): void {

   this.ticket=this.data;


  }

onsumbitCustomerEdit(){this.loadCustomer();}
onsumbitClientEdit(){this.loadClient();}
onsumbitEmplyeeAdd(){this.loadEmployees();}

  updateProject(){
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.editForm.value, null, 4));
    this.crudApi.UpdateProject(this.ticket.id, this.ticket).subscribe(next => {

      this.toastr.success('successfully updated!');
      this.editForm.reset(this.ticket);
    }, error => {
      console.log('error');
    });

  }

  loadCustomer(){
    this.cusApi.GetCustomerList().subscribe(data=>{
      this.customers=data;
    });
  }
  loadClient(){
    this.clientApi.GetClientList().subscribe(data=>{
      this.clients=data;
    });
  }
  loadEmployees(){
    this.empservice.GetEmployeeList().subscribe(data=>{
      this.employees=data;
    });
  }



}
