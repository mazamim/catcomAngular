import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../_services/expenses.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertifyService } from '../_services/alertify.service';
import { Expenses } from '../_model/expenses';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
import { Timestamp } from '@firebase/firestore-types';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {


  bsConfig: Partial<BsDatepickerConfig>;
  bsValue = new Date();
  expensesForm: FormGroup;

  expenses: any;
  tdate: number ;
  amount: number;
  paymentmode: string;
  describtion: string;
  dateToday: number = Date.now();

  constructor(private service: ExpensesService,
    private firestore: AngularFirestore
) { }

  ngOnInit(): void {


    this.service.addQuery();

    this.service.read_expenses().subscribe(data => {

      this.expenses = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          tdate: e.payload.doc.data()['tdate'],
          amount: e.payload.doc.data()['amount'],
          paymentmode: e.payload.doc.data()['paymentmode'],
          describtion: e.payload.doc.data()['describtion'],
        };
      })
      console.log(this.expenses);

    })
  }

  CreateRecord() {
    let record = {};
    record['tDate'] = this.tdate;
    record['amount'] = this.amount;
    record['paymentmode'] = this.paymentmode;
    record['describtion'] = this.describtion;
    this.service.create_expenses(record).then(resp => {
      this.tdate = undefined;
      this.amount = undefined;
      this.paymentmode = "";
      this.describtion = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.service.delete_expense(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditTDate = record.tDate;
    record.EditAmount = record.amount;
    record.EditPaymentmode = record.paymentMode;
    record.describtion = record.describtion;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['tdate'] = recordRow.EditName;
    record['paymentMode'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    record['amount'] = recordRow.EditAmount;
    record['describtion'] = recordRow.EditDescribtion;
    this.service.update_expenses(recordRow.id, record);
    recordRow.isEdit = false;
  }



}



