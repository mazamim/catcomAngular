import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

import { AlertifyService } from './alertify.service';
import { Employee } from '../_model/employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  constructor(private firestore: AngularFirestore) { }


  getEmployees() {
    return this.firestore.collection('employees').snapshotChanges();
  }

}
