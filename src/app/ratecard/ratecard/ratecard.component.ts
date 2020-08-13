import { Component, OnInit, ViewChild } from '@angular/core';
import { ITableData } from 'src/app/_model/attendance';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/_services/employee.service';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { IEmployee } from 'src/app/_model/employee';
import { BulkRatecard } from 'src/app/_model/ratecard';
import { RatecardService } from 'src/app/_services/ratecard.service';
import { IClient } from 'src/app/_model/client';
import { ClientService } from 'src/app/_services/client.service';

@Component({
  selector: 'app-ratecard',
  templateUrl: './ratecard.component.html',
  styleUrls: ['./ratecard.component.scss']
})
export class RatecardComponent implements OnInit {
  ELEMENT_DATA:BulkRatecard[];
  displayedColumns: string[] = ['category', 'sor', 'description', 'uom','rate','client_id'];
 dataSource=new MatTableDataSource<BulkRatecard>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  rowData : any;

  show: boolean = false;
  ratecard:BulkRatecard[];
  clients:IClient[];

  constructor(private api:RatecardService,
    private clientservice:ClientService) { }

  ngOnInit(): void {

     this.clientservice.GetClientList().subscribe(data=>{

      this.clients=data;
     })

  this.getAllData();
  this.dataSource.paginator = this.paginator;

  }

  public getAllData(){

    this.api.getAllRateCard().subscribe(data=>{
    this.dataSource.data = data as BulkRatecard[]

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
this.api.getAllRateCard().subscribe(data=>{

  this.dataSource.data = data as BulkRatecard[]

});

  }

  myForm = new FormGroup({
    emp_id:new FormControl,
    startIn: new FormControl(new Date()),
    endIn: new FormControl(new Date())



  });




applyFilter(filterValue:string){
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }




}
