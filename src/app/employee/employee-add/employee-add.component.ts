import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  public employeeForm: FormGroup;

  constructor(public crudApi: EmployeeService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,private cusservice:CustomerService ) { }

  ngOnInit(): void {
    this.crudApi.GetEmployeeList();
    this.myForm();
  }

  myForm() {
    this.employeeForm = this.fb.group({
      emp_name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      emailadd: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      position: ['']
    })
  }

  ResetForm() {
    this.employeeForm.reset();
  }

  submitEmployeeData() {
    this.crudApi.AddEmployee(this.employeeForm.value).subscribe((data=>{
      this.toastr.success(data.emp_name + ' successfully Aded!');
      this.crudApi.GetEmployeeList();
      this.cusservice.refresh();
    }));



   };


}
