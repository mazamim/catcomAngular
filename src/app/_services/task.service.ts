import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { DoTask } from '../_model/task';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  GetTaskList() {
    return this.http.get<DoTask[]>(this.baseUrl + 'tasks');
  }
  
  AddTask(task:DoTask){

    return this.http.post<DoTask>(this.baseUrl + 'tasks', task );

  }

  DeleteTask(id: number) {

    return this.http.delete<DoTask>(this.baseUrl + 'task/'+id);
  }


}
