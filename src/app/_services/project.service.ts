import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IProject, IJobType, ICount } from '../_model/project';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IGetEmployeedFromTicket } from '../projects/add-using-table/add-using-table.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  GetProjectList(){

    return this.http.get<IProject[]>(this.baseUrl + 'projects');
  }

  GetProjectListforindex(){

    return this.http.get<IProject[]>(this.baseUrl + 'projects8');
  }

  getProject(id:number){
    return this.http.get<IProject>(this.baseUrl + 'project/'+id);

  }
  DeleteProject(id:number){

    return this.http.delete<IProject>(this.baseUrl + 'project/'+id);
  }

  UpdateProject(id: number,ticket: IProject) {
    return this.http.put<IProject>(this.baseUrl + 'project/' + id, ticket);
  }


  AddProject(project:IProject){

    return this.http.post<IProject>(this.baseUrl + 'projects', project );

  }


  AddJobtype(jobtype:IJobType){

    return this.http.post<IJobType>(this.baseUrl + 'jobtypes', jobtype );

  }

  getAllJobtype(){
    return this.http.get<IJobType[]>(this.baseUrl + 'jobtypes');

  }

getNumbersCompleted(){

  return this.http.get<ICount[]>(this.baseUrl + 'countJobs');

}


getNumbersforIndexPage(){

  return this.http.get<ICount[]>(this.baseUrl + 'countIndexPage');

}


getChildren(id:number){

  return this.http.get<IGetEmployeedFromTicket[]>(this.baseUrl + 'projectchild/'+id);

}

ratechildbyproject(id:number){

  return this.http.get<any[]>(this.baseUrl + 'ratechildbyproject/'+id);

}


}
