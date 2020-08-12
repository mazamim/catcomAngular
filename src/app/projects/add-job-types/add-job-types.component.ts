import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { IProject, IJobType } from 'src/app/_model/project';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/_services/project.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/_services/customer.service';
import { ITableData } from 'src/app/_model/attendance';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-add-job-types',
  templateUrl: './add-job-types.component.html',
  styleUrls: ['./add-job-types.component.scss']
})
export class AddJobTypesComponent implements OnInit {
  public taskForm: FormGroup;

  ELEMENT_DATA:IJobType[];
  displayedColumns: string[] = ['jobType'];
 dataSource=new MatTableDataSource<IJobType>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  rowData : any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public fb: FormBuilder,
  public crudApi: ProjectService,
  public toastr: ToastrService,
  private router: Router,
  private cusApi:CustomerService) { }

  ngOnInit(): void {
    this.myForm();
    this.getAllData();
  }


  myForm() {
    this.taskForm = this.fb.group({
      jobType: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  ResetForm() {
    this.taskForm.reset();
  }

  submitTaskData() {


    this.crudApi.AddJobtype(this.taskForm.value).subscribe(()=>{
      this.toastr.success('successfully Added!');
    }, error=>{console.log(error)}
    );



   }

   onRowClicked(row) {

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(row, null, 4));
}

public getAllData(){

  this.crudApi.getAllJobtype().subscribe(data=>{
  this.dataSource.data = data as IJobType[]

   });
}

}
