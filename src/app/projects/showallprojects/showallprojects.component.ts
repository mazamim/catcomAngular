import { Component, OnInit, ViewChild } from '@angular/core';
import { ITableData } from 'src/app/_model/attendance';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeeService } from 'src/app/_services/employee.service';
import { IProject } from 'src/app/_model/project';
import { ProjectService } from 'src/app/_services/project.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ProjectsAddComponent } from '../projects-add/projects-add.component';
import { AddUsingTableComponent } from '../add-using-table/add-using-table.component';


@Component({
  selector: 'app-showallprojects',
  templateUrl: './showallprojects.component.html',
  styleUrls: ['./showallprojects.component.scss']
})
export class ShowallprojectsComponent implements OnInit {
  ELEMENT_DATA:IProject[];
  displayedColumns: string[] = ['address', 'jobType', 'describtion', 'status','remarks','cus_name','client_name','actions'];
 dataSource=new MatTableDataSource<IProject>(this.ELEMENT_DATA);
 @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  myForm = new FormGroup({
    emp_id:new FormControl,
    startIn: new FormControl(new Date()),
    endIn: new FormControl(new Date())
  });

  rowData : any;

  constructor(private api:ProjectService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.getAllData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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


    onRowClicked(row:IProject) {

    //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(row, null, 4));

      this.dialog.open(AddUsingTableComponent,{
        width: '60%',
        height:'80%',
       data:row
      }
      );
    }
  }

