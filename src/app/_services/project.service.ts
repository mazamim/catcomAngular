import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IProject } from '../_model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  GetProjectList(){

    return this.http.get<IProject[]>(this.baseUrl + 'projects');
  }

  getProject(id:number){
    return this.http.get<IProject>(this.baseUrl + 'project/'+id);

  }
  DeleteProject(id:number){

    return this.http.delete<IProject>(this.baseUrl + 'project/'+id);
  }



  AddProject(project:IProject){

    return this.http.post<IProject>(this.baseUrl + 'projects', project );

  }


}
