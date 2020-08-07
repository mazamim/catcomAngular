import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { IEmployee } from 'src/app/_model/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import * as moment from 'moment';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ITableData } from 'src/app/_model/attendance';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.scss']
})
export class AttendanceReportComponent implements OnInit {
  ELEMENT_DATA:ITableData[];
  displayedColumns: string[] = ['empname', 'punchin', 'punchout', 'duration','earn'];
 dataSource=new MatTableDataSource<ITableData>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  rowData : any;

  show: boolean = false;
  employees:IEmployee[];
  obj:any={

      "emp_id":"all",
      "startIn": "2020-07-20 06:39:51",
      "endIn": "2020-07-21 07:40:14"

  };



  constructor(private api:EmployeeService) { }

  ngOnInit(): void {

     this.api.GetEmployeeList().subscribe(data=>{

      this.employees=data;
     })

  this.getAllData();
  this.dataSource.paginator = this.paginator;

  }

  public getAllData(){

    this.api.getAttendanceslistbydate(this.obj).subscribe(data=>{
    this.dataSource.data = data as ITableData[]

     });
  }

  onRowClicked(row) {

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(row, null, 4));
}



  onSumbit(){
const punchInfrom = moment(this.myForm.controls['startIn'].value).format('YYYY/MM/DD HH:mm:ss');
const punchInTo = moment(this.myForm.controls['endIn'].value).format('YYYY/MM/DD HH:mm:ss');

    this.myForm.patchValue({
      startIn:punchInfrom ,
      endIn:punchInTo


    })

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.value, null, 4));
this.api.getAttendanceslistbydate(this.myForm.value).subscribe(data=>{

  this.dataSource.data = data as ITableData[]

});

  }

  myForm = new FormGroup({
    emp_id:new FormControl,
    startIn: new FormControl(new Date()),
    endIn: new FormControl(new Date())



  });

  calculateDiff(sentDate1,sentDate2) {

    var date1:any = new Date(sentDate1).getTime();
    var date2:any = new Date(sentDate2).getTime();
   // var diffDays:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));

   let time = date1 - date2;
   let hoursDiff = time / (3600 * 1000);

if (hoursDiff > 0)
{

   return hoursDiff;

  }
else{return 'on-site'}

}


checkpunchout(sentDate1,sentDate2){

  var date1:any = new Date(sentDate1).getTime();
  var date2:any = new Date(sentDate2).getTime();
 // var diffDays:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));

 let time = date1 - date2;
 let hoursDiff = time / (3600 * 1000);

if (hoursDiff > 0){  return sentDate1;}
else{return 'on-site'}
}


applyFilter(filterValue:string){
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }




}





