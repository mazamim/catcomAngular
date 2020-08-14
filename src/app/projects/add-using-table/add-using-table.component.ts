import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProject, IJobType } from 'src/app/_model/project';
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
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileUploader } from 'ng2-file-upload';
import { AngularFireDatabase } from '@angular/fire/database';
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

  @ViewChild('editForm',{static:true}) editForm: NgForm;



  // uploader: FileUploader;


  constructor(@Inject(MAT_DIALOG_DATA) public data: IProject,
  public crudApi: ProjectService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,
    private cusApi:CustomerService,
    private clientApi:ClientService,
    private empservice:EmployeeService,
    private afStorage: AngularFireStorage) {

    }

  ngOnInit(): void {

   this.ticket=this.data;
this.loadJobtype();


  }

onsumbitCustomerEdit(){this.loadCustomer();}
onsumbitClientEdit(){this.loadClient();}
onsumbitEmplyeeAdd(){this.loadEmployees();}

  updateProject(){
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.editForm.value, null, 4));
    this.crudApi.UpdateProject(this.ticket.id, this.ticket).subscribe(next => {

      this.toastr.success('successfully updated!');
      this.editForm.reset(this.ticket);
      this.cusApi.refresh();
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

}
