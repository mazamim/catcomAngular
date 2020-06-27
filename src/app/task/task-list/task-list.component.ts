import { Component, OnInit } from '@angular/core';
import { DoTask } from 'src/app/_model/task';
import { TaskService } from 'src/app/_services/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  p: number = 1;                      // Settup up pagination variable
  myTask: DoTask[];                 // Save students data in Student's array.
  hideWhenNoStudent: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true;
  constructor(    public crudApi: TaskService, // Inject student CRUD services in constructor.
    public toastr: ToastrService) { }

  ngOnInit(): void {

    this.dataState(); // Initialize student's list, when component is ready
    let s = this.crudApi.GetTasksList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.myTask = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.myTask.push(a as DoTask);
      })
    })
  }

  dataState() {
    this.crudApi.GetTasksList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }

}
