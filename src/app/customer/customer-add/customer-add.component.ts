import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/_services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  public taskForm: FormGroup;


  constructor(public crudApi: CustomerService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router){


     }

  ngOnInit(): void {
    this.myForm();
  }






  myForm() {
    this.taskForm = this.fb.group({
      cus_name: ['', [Validators.required, Validators.minLength(2)]],
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
    this.crudApi.AddCustomer(this.taskForm.value).subscribe((data=>{
      this.toastr.success('successfully Added!');
      this.crudApi.refresh();
    }));

    this.ResetForm();
   }

}
