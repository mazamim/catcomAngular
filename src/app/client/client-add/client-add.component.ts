import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/_services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/_services/customer.service';

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
    private router: Router,
    private customerservice:CustomerService) { }

  ngOnInit(): void {
    this.myForm();
  }

  myForm() {
    this.taskForm = this.fb.group({
      client_name: ['', [Validators.required, Validators.minLength(2)]],
      mobile: [''],
      emailadd: [''],
      description: ['']


    })
  }

  ResetForm() {
    this.taskForm.reset();
  }

  submitTaskData() {

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.taskForm.value, null, 4));
    this.crudApi.AddClient(this.taskForm.value).subscribe((data=>{
      this.toastr.success('successfully Added!');
      this.customerservice.refresh();
      this.crudApi.GetClientList();
    }));

    this.ResetForm();
   }


}
