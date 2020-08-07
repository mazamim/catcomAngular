import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/_services/project.service';
import { IProject } from 'src/app/_model/project';
import { CustomerService } from 'src/app/_services/customer.service';
import { Pagination } from 'src/app/_model/Pagination';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projects: IProject[];
  pagination: Pagination;

  constructor(public crudApi: ProjectService, // Inject student CRUD services in constructor.
    public toastr: ToastrService,
    private customerservice:CustomerService) { }

  ngOnInit(): void {

    this.getProjects();
  }

  getProjects() {
    this.crudApi.GetProjectListforindex().subscribe(response => {
      this.projects = response;

    }, error => {
      console.log(error);
    });
  }

  deleteProject(id:number) {
    if (window.confirm('Are you sure want to delete task?')) {


      this.crudApi.DeleteProject(id).subscribe(response =>{

          this.toastr.success('successfully deleted!');

          this.customerservice.refresh();
        });
       // Alert message will show up when student successfully deleted.
    }
  }


  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    //this.loadUsers();
  }

}
