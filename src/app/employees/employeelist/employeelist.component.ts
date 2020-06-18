import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from 'src/app/_model/employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  list: Employee[];
  constructor(private service: EmployeeService,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {


  }

}
