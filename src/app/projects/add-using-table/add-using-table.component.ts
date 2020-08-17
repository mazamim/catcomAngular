import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProject, IJobType } from 'src/app/_model/project';
import { ProjectService } from 'src/app/_services/project.service';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/_services/customer.service';
import { ClientService } from 'src/app/_services/client.service';
import { ICustomer } from 'src/app/_model/customer';
import { IClient } from 'src/app/_model/client';
import { IEmployee } from 'src/app/_model/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { finalize, tap, map, takeUntil } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileUploader } from 'ng2-file-upload';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatPaginator } from '@angular/material/paginator';
import { BulkRatecard } from 'src/app/_model/ratecard';
import { MatTableDataSource } from '@angular/material/table';
import { RatecardService } from 'src/app/_services/ratecard.service';
import { MatSelect } from '@angular/material/select';

export interface IGetEmployeedFromTicket {
  id: number;
  emp_id: number;
  project_id:number;

}

@Component({
  selector: 'app-add-using-table',
  templateUrl: './add-using-table.component.html',
  styleUrls: ['./add-using-table.component.scss']
})


export class AddUsingTableComponent implements OnInit {



  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string[]>;
  uploadState: Observable<string>;
  public taskForm: FormGroup;
  customers:ICustomer[];
  clients:IClient[];
  ticket:IProject;
  employees?:IEmployee[];
  jobtype:IJobType[];
  childemployess=[];
  listofrates=[];
  listofratesCode=[];
  @ViewChild('editForm',{static:true}) editForm: NgForm;
  constructor(@Inject(MAT_DIALOG_DATA) public data: IProject,
  public crudApi: ProjectService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,
    private cusApi:CustomerService,
    private clientApi:ClientService,
    private empservice:EmployeeService,
    private afStorage: AngularFireStorage,
    private api:RatecardService,) {

    }

  ngOnInit(): void {


    this.api.setValaue(false);
this.getEmployees();

   this.ticket=this.data;
   this.loadJobtype();

this.getEmployeesFromTicket();
  }

  getEmployees() {
    this.empservice.GetEmployeeList().subscribe(response => {
      this.employees = response as IEmployee[];
    }, error => {
      console.log(error);
    });
  }

  myForm = new FormGroup({
    emp_id:new FormControl,
    startIn: new FormControl(new Date()),
    endIn: new FormControl(new Date()),
    frmemployees:new FormControl


  });

onsumbitCustomerEdit(){this.loadCustomer();}
onsumbitClientEdit(){this.loadClient();}
onsumbitEmplyeeAdd(){this.loadEmployees();}

  updateProject(){
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.editForm.value, null, 4));
    console.log(this.editForm.value);
    this.crudApi.UpdateProject(this.ticket.id, this.editForm.value).subscribe(next => {

      this.toastr.success('successfully updated!');
      this.editForm.reset(this.ticket);
      this.cusApi.refresh();
    }, error => {
      console.log('error');
    });

  }

  addRates(){


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

  public loadJobtype(){

    this.crudApi.getAllJobtype().subscribe(data=>{
    this.jobtype= data as IJobType[]

     });
  }
upload(event) {
  for (var i = 0; i < event.target.files.length; i++) {
    const id = Math.random().toString(36).substring(2);

    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[i]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = this.ref.getDownloadURL())
   )
  .subscribe()
  }
}

getEmployeesFromTicket(){

this.crudApi.getChildren(this.ticket.id).subscribe(data=>{
  this.childemployess = data.map( (o)=> o.emp_id );
});
}


displayfromchild(result) {
  this.listofratesCode.push(result);
  this.listofrates.push(this.listofratesCode.map( (o)=> o.id));
}

}

