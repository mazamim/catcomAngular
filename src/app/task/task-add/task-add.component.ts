import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/_services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  public TasksForm: FormGroup;
  constructor(public crudApi: TaskService,
    public fb: FormBuilder,
    public toastr: ToastrService) { }

  ngOnInit(): void {

    this.crudApi.GetTasksList();  // Call GetStudentsList() before main form is being called
    this.myForm();
  }

  myForm() {
    this.TasksForm = this.fb.group({
      taskname: ['', [Validators.required, Validators.minLength(2)]],
      category: [''],
      describtion: [''],
      status: ['']
    })
  }

  get taskname() {
    return this.TasksForm.get('taskname');
  }

  get category() {
    return this.TasksForm.get('category');
  }

  get describtion() {
    return this.TasksForm.get('describtion');
  }

  get status() {
    return this.TasksForm.get('status');
  }

  get position() {
    return this.TasksForm.get('position');
  }

  ResetForm() {
    this.TasksForm.reset();
  }

  submitEmployeeData() {
    this.crudApi.AddTask(this.TasksForm.value); // Submit student data using CRUD API
    this.toastr.success(this.TasksForm.controls['taskname'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
   };

}
