import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../_services/expenses.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertifyService } from '../_services/alertify.service';
import { Expenses } from '../_model/expenses';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {


  bsConfig: Partial<BsDatepickerConfig>;
  bsValue = new Date();
  expensesForm: FormGroup;

  students: any;
  studentName: string;
  studentAge: number;
  studentAddress: string;


  constructor(private service: ExpensesService,
    private firestore: AngularFirestore
) { }

  ngOnInit(): void {


    this.service.read_Students().subscribe(data => {

      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.students);

    })
  }

  CreateRecord() {
    let record = {};
    record['Name'] = this.studentName;
    record['Age'] = this.studentAge;
    record['Address'] = this.studentAddress;
    this.service.create_NewStudent(record).then(resp => {
      this.studentName = "";
      this.studentAge = undefined;
      this.studentAddress = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.service.delete_Student(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.service.update_Student(recordRow.id, record);
    recordRow.isEdit = false;
  }



}



