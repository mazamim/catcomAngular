import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ProjectService } from 'src/app/_services/project.service';
import { ICount, IProject } from 'src/app/_model/project';
import { single } from 'rxjs/operators';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ITableData } from 'src/app/_model/attendance';

@Component({
  selector: 'app-progresstasklist',
  templateUrl: './progresstasklist.component.html',
  styleUrls: ['./progresstasklist.component.scss']
})
export class ProgresstasklistComponent implements OnInit {

  employees: Array<any>;
  totalRec : number;
  page: number = 1;


  constructor(public crudApi: ProjectService,private api:EmployeeService) {
    this.employees = new Array<any>();
  }

  ngOnInit(): void {
    this.getAllData();

  }




  public getAllData(){

    this.crudApi.GetProjectList('Assigned').subscribe(data=>{
      this.employees = data as IProject[];
      this.totalRec = this.employees.length;

     });
  }

}
