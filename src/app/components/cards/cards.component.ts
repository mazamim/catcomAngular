import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ProjectService } from 'src/app/_services/project.service';
import { ICount } from 'src/app/_model/project';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
mydata:ICount[];
  constructor(private empsercice:EmployeeService,
    public projectservice: ProjectService) { }

  ngOnInit(): void {
   this.getNumbers();

  }

  getNumbers(){

this.projectservice.getNumbersforIndexPage().subscribe(data=>{
this.mydata=data as ICount[];

});

  }

}
