import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Expenses } from '../_model/expenses';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private firestore: AngularFirestore) { }


  create_expenses(record:any) {
    return this.firestore.collection('Expenses').add(record);
  }

  read_expenses() {
    return this.firestore.collection('Expenses').snapshotChanges();
  }

  update_expenses(recordID,record){
    this.firestore.doc('Expenses/' + recordID).update(record);
  }

  delete_expense(record_id) {
    this.firestore.doc('Expenses/' + record_id).delete();
  }


}
