import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/_services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  public taskForm: FormGroup;
  constructor(public crudApi: TaskService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {

    // this.crudApi.GetEmployeeList();
    this.myForm();
  }

  
  myForm() {
    this.taskForm = this.fb.group({
      describtion: ['', [Validators.required, Validators.minLength(2)]],
      remarks: [''],
      status: ['']
  
      
    })
  }

  ResetForm() {
    this.taskForm.reset();
  }

  submitTaskData() {

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.taskForm.value, null, 4));
    this.crudApi.AddTask(this.taskForm.value).subscribe((data=>{
      this.toastr.success('successfully Added!');
      this.crudApi.GetTaskList();
    }));

    this.ResetForm();
   };




}
