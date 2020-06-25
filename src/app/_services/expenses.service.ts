import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Expenses } from '../_model/expenses';
import { analytics } from 'firebase';
import { Timestamp } from '@firebase/firestore-types';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private db: AngularFirestore) { }


  create_expenses(record:any) {
    return this.db.collection('Expenses').add(record);
  }

  read_expenses() {
    return this.db.collection('Expenses').snapshotChanges();
  }

  update_expenses(recordID,record){
    this.db.doc('Expenses/' + recordID).update(record);
  }

  delete_expense(record_id) {
    this.db.doc('Expenses/' + record_id).delete();
  }


addQuery(){

  this.db.collection('Expenses').valueChanges().subscribe(val=>console.log(val));
}



}
