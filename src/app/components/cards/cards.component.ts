import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(private empsercice:EmployeeService) { }

  ngOnInit(): void {


  }

}
