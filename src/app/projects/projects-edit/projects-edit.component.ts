import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/_services/project.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProject } from 'src/app/_model/project';

import { EmployeeService } from 'src/app/_services/employee.service';
import { IEmployee } from 'src/app/_model/employee';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-projects-edit',
  templateUrl: './projects-edit.component.html',
  styleUrls: ['./projects-edit.component.scss']
})
export class ProjectsEditComponent implements OnInit {
  ticket:IProject;
  id:number;

  constructor(public crudApi: ProjectService,
    public toastr: ToastrService,private route: ActivatedRoute,
    private employeeservice:EmployeeService,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.id = (+this.route.snapshot.paramMap.get('id'));
    this.crudApi.getProject(this.id).subscribe(data=>{
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
     this.ticket=data;

    });


  }

//   onSubmit() {
//     alert(JSON.stringify(this.myForm.value));
// }

  updateProject(){}
}
