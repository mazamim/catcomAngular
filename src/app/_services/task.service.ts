import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { DoTask } from '../_model/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksRef: AngularFireList<any>;
  taskRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

     // Create task
     AddTask(mytask: DoTask) {
      this.tasksRef.push({
        taskname: mytask.taskname,
        category: mytask.category,
        describtion: mytask.describtion,
        status: mytask.status
      })
    }

      // Fetch Single Student Object
      GetTask(id: string) {
        this.taskRef = this.db.object('tasks-list/' + id);
        return this.taskRef;
      }

      GetTasksList() {
        this.tasksRef = this.db.list('tasks-list');
        return this.tasksRef;
      }

        // Update Student Object
    UpdateTask(task: DoTask) {
      this.taskRef.update({
        taskname: task.taskname,
        category: task.category,
        describtion: task.describtion,
        status: task.status
      })
    }

    // Delete Student Object
    DeleteTask(id: string) {
      this.taskRef = this.db.object('tasks-list/'+id);
      this.taskRef.remove();
    }
}
