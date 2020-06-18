import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Employee } from '../_model/employee';
import { AlertifyService } from '../_services/alertify.service';




@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

model:Employee;
list: Employee[];

  constructor(private service: EmployeeService,
    private firestore: AngularFirestore,
    private alertify:AlertifyService) { }



  ngOnInit(){

    this.service.getEmployees().subscribe(data => {
      this.list = data.map(item => {
        return {
          id: item.payload.doc.id,
          fullName: item.payload.doc.data['fullName'],
          position: item.payload.doc.data['position'],
          empCode: item.payload.doc.data['empCode'],
          mobile: item.payload.doc.data['mobile'],

        };
      })
    });

    this.resetForm();

  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.model= {
      id: null,
      fullName: '',
      position: '',
      empCode: '',
      mobile: '',
    }

  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('employees').add(data);
    this.alertify.success('ok');

    if (form.value.id !== null)
      this.firestore.doc('employees/' + form.value.id).update(data);
    this.resetForm(form);
  }



  }


