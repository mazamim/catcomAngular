import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Tool } from '../_model/tool';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  toolsRef: AngularFireList<any>;
  toolRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  AddTools(mytools: Tool) {
    this.toolsRef.push({
      toolname: mytools.toolname,
      qty: mytools.qty,
      category: mytools.category,
      describtion: mytools.describtion

    })
  }

  GetToolListbyCat() {

    this.toolsRef = this.db.list('/tasks-list', ref => ref.orderByChild('taskname').equalTo('test'));
        return this.toolsRef;
  }


}
