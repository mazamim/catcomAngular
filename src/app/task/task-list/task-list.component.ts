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

  tasks: DoTask[];

  constructor(    public crudApi: TaskService, // Inject student CRUD services in constructor.
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.getTasks();

  }

  getTasks() {
    this.crudApi.GetTaskList().subscribe(response => {
      this.tasks = response;
    }, error => {
      console.log(error);
    });
  }

  deleteTask(id:number) {
    if (window.confirm('Are you sure want to delete task?')) {

    
      this.crudApi.DeleteTask(id).subscribe(response =>{

          this.toastr.success('successfully deleted!');


        });
       // Alert message will show up when student successfully deleted.
    }
  }


}
