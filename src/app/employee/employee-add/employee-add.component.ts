import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  public employeeForm: FormGroup;

  constructor(public crudApi: EmployeeService,
    public fb: FormBuilder,
    public toastr: ToastrService ) { }

  ngOnInit(): void {
    this.crudApi.GetEmployeeList();  // Call GetStudentsList() before main form is being called
    this.myForm();
  }

  myForm() {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      position: ['']
    })
  }

  get firstName() {
    return this.employeeForm.get('firstName');
  }

  get lastName() {
    return this.employeeForm.get('lastName');
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get mobileNumber() {
    return this.employeeForm.get('mobileNumber');
  }

  get position() {
    return this.employeeForm.get('position');
  }

  ResetForm() {
    this.employeeForm.reset();
  }

  submitEmployeeData() {
    this.crudApi.AddEmployee(this.employeeForm.value); // Submit student data using CRUD API
    this.toastr.success(this.employeeForm.controls['firstName'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
   };


}
