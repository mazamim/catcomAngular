import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/_services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {
  public taskForm: FormGroup;
  constructor(public crudApi: ClientService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
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
    this.crudApi.AddClient(this.taskForm.value).subscribe((data=>{
      this.toastr.success('successfully Added!');
      this.crudApi.GetClientList();
    }));

    this.ResetForm();
   };


}
