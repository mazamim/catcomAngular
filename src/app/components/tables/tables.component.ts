import { Component, OnInit } from '@angular/core';
import { ITableData } from 'src/app/_model/attendance';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ICount } from 'src/app/_model/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  employees: Array<any>;
  totalRec : number;
  page: number = 1;
  chartdata:ICount[];


  obj:any={

    "emp_id":"all",
    "startIn": "2020-07-20 06:39:51",
    "endIn": "2020-07-21 07:40:14"

};


  constructor(private api:EmployeeService,public crudApi: ProjectService) {
    this.employees = new Array<any>();
  }

  ngOnInit(): void {

    this.getAllData();
    this.getNumbers();
  }



  public getAllData(){

    this.api.getAttendanceslistbydate(this.obj).subscribe(data=>{
      this.employees = data as ITableData[];
      this.totalRec = this.employees.length;

     });
  }

  getNumbers(){

    this.crudApi.getNumbersCompleted().subscribe(data=>{
      this.chartdata = data as ICount[]

    });
      }

}
