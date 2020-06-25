import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AlertifyService } from './alertify.service';
import { Employee } from '../_model/employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesRef: AngularFireList<any>;
  employeeRef: AngularFireObject<any>


  constructor(private db: AngularFireDatabase) { }

   // Create Employee
   AddEmployee(employee: Employee) {
    this.employeesRef.push({
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      mobileNumber: employee.mobileNumber,
      position:employee.position
    })
  }

     // Fetch Single employee Object
     GetEmployee(id: string) {
      this.employeeRef = this.db.object('employee-list/' + id);
      return this.employeeRef;
    }


    GetEmployeeList() {
      this.employeesRef = this.db.list('employee-list');
      return this.employeesRef;
    }

          // Update employee Object
  UpdateEmployee(employee: Employee) {
    this.employeeRef.update({
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      mobileNumber: employee.mobileNumber,
      position: employee.position
    })
  }

  // Delete Student Object
  DeleteEmployee(id: string) {
    this.employeeRef = this.db.object('employee-list/'+id);
    this.employeeRef.remove();
  }

}
