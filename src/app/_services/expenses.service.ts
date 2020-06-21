import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Expenses } from '../_model/expenses';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private firestore: AngularFirestore) { }


  create_NewStudent(record:any) {
    return this.firestore.collection('Students').add(record);
  }

  read_Students() {
    return this.firestore.collection('Students').snapshotChanges();
  }

  update_Student(recordID,record){
    this.firestore.doc('Students/' + recordID).update(record);
  }

  delete_Student(record_id) {
    this.firestore.doc('Students/' + record_id).delete();
  }


}
