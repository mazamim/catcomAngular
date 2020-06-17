import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { IEmployee } from '../_model/employee';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private fireservice:AngularFirestore,
    private alert:AlertifyService) { }

  createNewEmployee(record:any)
  {
		return this.fireservice.collection('Employee').add(record);

  }
}
