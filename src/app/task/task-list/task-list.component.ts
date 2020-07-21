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

  constructor(    public crudApi: TaskService, // Inject student CRUD services in constructor.
    public toastr: ToastrService) { }

  ngOnInit(): void {

  }


}
