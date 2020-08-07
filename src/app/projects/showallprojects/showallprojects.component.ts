import { Component, OnInit, ViewChild } from '@angular/core';
import { ITableData } from 'src/app/_model/attendance';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeeService } from 'src/app/_services/employee.service';
import { IProject } from 'src/app/_model/project';
import { ProjectService } from 'src/app/_services/project.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-showallprojects',
  templateUrl: './showallprojects.component.html',
  styleUrls: ['./showallprojects.component.scss']
})
export class ShowallprojectsComponent implements OnInit {
  ELEMENT_DATA:IProject[];
  displayedColumns: string[] = ['address', 'jobType', 'describtion', 'status','remarks','cus_name','client_name'];
 dataSource=new MatTableDataSource<IProject>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  myForm = new FormGroup({
    emp_id:new FormControl,
    startIn: new FormControl(new Date()),
    endIn: new FormControl(new Date())
  });

  rowData : any;

  constructor(private api:ProjectService) { }

  ngOnInit(): void {

    this.getAllData();
    this.dataSource.paginator = this.paginator;
  }
  public getAllData(){

    this.api.GetProjectList().subscribe(data=>{
    this.dataSource.data = data as IProject[]

     });
  }

  onSumbit(){}

  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
