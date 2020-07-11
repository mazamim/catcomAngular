import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router ) { }

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

  get emp_name() {
    return this.employeeForm.get('emp_name');
  }
  get lastname() {
    return this.employeeForm.get('lastname');
  }

  get position() {
    return this.employeeForm.get('position');
  }

  get mobile() {
    return this.employeeForm.get('mobile');
  }

  get emailadd() {
    return this.employeeForm.get('emailadd');
  }


  get description() {
    return this.employeeForm.get('description');
  }

  ResetForm() {
    this.employeeForm.reset();
  }

  submitEmployeeData() {
    this.crudApi.AddEmployee(this.employeeForm.value).subscribe((data=>{
      this.toastr.success(data.emp_name + ' successfully Aded!');
      this.crudApi.GetEmployeeList();
    }));

    this.ResetForm();
   };


}
