import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/_model/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/_model/photo';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
employee:IEmployee;
photo: Photo[];


  constructor( public crudApi: EmployeeService,
    public toastr: ToastrService,private route: ActivatedRoute
    ) { }

  ngOnInit(): void
  {
   const id = (+this.route.snapshot.paramMap.get('id'));
   this.crudApi.GetEmployee(id).subscribe(data=>{

    this.employee=data;
    console.log(this.employee);
   });



  }

  updateEmployee(){}



}
