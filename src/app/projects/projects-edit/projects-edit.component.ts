import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from 'src/app/_services/project.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProject } from 'src/app/_model/project';

import { EmployeeService } from 'src/app/_services/employee.service';
import { IEmployee } from 'src/app/_model/employee';
import { NgForm } from '@angular/forms';
import { ICustomer } from 'src/app/_model/customer';
import { IClient } from 'src/app/_model/client';
import { ClientService } from 'src/app/_services/client.service';
import { CustomerService } from 'src/app/_services/customer.service';


@Component({
  selector: 'app-projects-edit',
  templateUrl: './projects-edit.component.html',
  styleUrls: ['./projects-edit.component.scss']
})
export class ProjectsEditComponent implements OnInit {

  ticket:IProject;
  employees?:IEmployee[];
  customers?:ICustomer[];
  clients?:IClient[];
  id:number;
  @ViewChild('editForm',{static:true}) editForm: NgForm;

  constructor(public crudApi: ProjectService,
    public toastr: ToastrService,private route: ActivatedRoute,
    private employeeservice:EmployeeService,
    private clientservice:ClientService,
    private customerservice:CustomerService
    ) { }

  ngOnInit(): void {
    this.id = (+this.route.snapshot.paramMap.get('id'));
    this.crudApi.getProject(this.id).subscribe(data=>{

     this.ticket=data;

    });


  }



onsumbitCustomerEdit(){this.loadCustomer();}
onsumbitClientEdit(){this.loadClient();}
onsumbitEmplyeeAdd(){this.loadEmployees();}

  updateProject(){

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.editForm.value, null, 4));
    this.crudApi.UpdateProject(this.id, this.ticket).subscribe(next => {

      this.toastr.success('successfully updated!');
      this.editForm.reset(this.ticket);
    }, error => {
      console.log('error');
    });

  }
  loadCustomer(){
    this.customerservice.GetCustomerList().subscribe(data=>{
      this.customers=data;
    });
  }
  loadClient(){
    this.clientservice.GetClientList().subscribe(data=>{
      this.clients=data;
    });
  }
  loadEmployees(){
    this.employeeservice.GetEmployeeList().subscribe(data=>{
      this.employees=data;
    });
  }
}
