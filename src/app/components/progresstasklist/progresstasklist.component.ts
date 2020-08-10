import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ProjectService } from 'src/app/_services/project.service';
import { ICount } from 'src/app/_model/project';
import { single } from 'rxjs/operators';

@Component({
  selector: 'app-progresstasklist',
  templateUrl: './progresstasklist.component.html',
  styleUrls: ['./progresstasklist.component.scss']
})
export class ProgresstasklistComponent implements OnInit {

  chartdata:ICount[];

  // saleData = [
  //   { name: "Mobiles", value: 105000 },
  //   { name: "Laptop", value: 55000 },
  //   { name: "AC", value: 15000 },
  //   { name: "Headset", value: 150000 },
  //   { name: "Fridge", value: 20000 }
  // ];


  constructor(public crudApi: ProjectService) {

  }

  ngOnInit(): void {
    this.getNumbers();

  }




  getNumbers(){

this.crudApi.getNumbersCompleted().subscribe(data=>{
  this.chartdata = data as ICount[]

});
  }

}
