import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/_services/project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ICustomer } from 'src/app/_model/customer';
import { CustomerService } from 'src/app/_services/customer.service';
import { IClient } from 'src/app/_model/client';
import { ClientService } from 'src/app/_services/client.service';
import { MatDialog } from '@angular/material/dialog';
import { AddJobTypesComponent } from '../add-job-types/add-job-types.component';
import { IJobType } from 'src/app/_model/project';

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.scss']
})
export class ProjectsAddComponent implements OnInit {
  public taskForm: FormGroup;
  customers:ICustomer[];
  clients:IClient[];
  jobtype:IJobType[];

  constructor(public crudApi: ProjectService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,
    private cusApi:CustomerService,
    private clientApi:ClientService,

    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.myForm();
    this.loadCustomer();
    this.loadClient();
    this.loadJobtype();
  }

  myForm() {
    this.taskForm = this.fb.group({
      address: ['', [Validators.required, Validators.minLength(2)]],
      jobType: [''],
      describtion: [''],
      status: [''],
      remarks: [''],
      cus_id : [''],
      client_id : ['']


    })
  }


  loadCustomer(){

this.cusApi.GetCustomerList().subscribe(data=>{
this.customers=data;

})
  }

  loadClient(){

    this.clientApi.GetClientList().subscribe(data=>{
    this.clients=data;

    })
      }

  ResetForm() {
    this.taskForm.reset();
  }

  submitTaskData() {

  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.taskForm.value, null, 4));
    this.crudApi.AddProject(this.taskForm.value).subscribe((data=>{
      this.toastr.success('successfully Added!');
      this.cusApi.refresh();
      this.crudApi.GetProjectList('Assigned');
    }));

    this.ResetForm();
    this.cusApi.refresh();
   }

   addJobTypes(){
    this.dialog.open(AddJobTypesComponent,{
      width: '50%',
      height:'60%',
     data:{name:'mazahim'}
    }
    );

   }

   public loadJobtype(){

    this.crudApi.getAllJobtype().subscribe(data=>{
    this.jobtype= data as IJobType[]

     });
  }


}
