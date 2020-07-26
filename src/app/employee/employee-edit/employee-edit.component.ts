import { Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from 'src/app/_model/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/_model/photo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
employee:IEmployee;
photo: Photo[];
id:number;
@ViewChild('editForm',{static:true}) editForm: NgForm;

  constructor( public crudApi: EmployeeService,
    public toastr: ToastrService,private route: ActivatedRoute

    ) { }

  ngOnInit(): void
  {
  this.id = (+this.route.snapshot.paramMap.get('id'));
   this.crudApi.GetEmployee(this.id).subscribe(data=>{

    this.employee=data;

   });



  }

  updateEmployee()
  {

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.employee, null, 4));
    this.crudApi.UpdateEmployee(this.id, this.employee).subscribe(next => {

      this.toastr.success('successfully updated!');
      this.editForm.reset(this.employee);
    }, error => {
      console.log('error');
    });

  }



}
