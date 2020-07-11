import { Injectable } from '@angular/core';
import { IEmployee } from '../_model/employee';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Photo } from '../_model/photo';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }


   AddEmployee(employee: IEmployee) {

    return this.http.post<IEmployee>(this.baseUrl + 'employee', employee );
}

     // Fetch Single employee Object
     GetEmployee(id: number) {
      return this.http.get<IEmployee>(this.baseUrl + 'employee/' + id);
    }


    GetEmployeeList() {
      return this.http.get<IEmployee[]>(this.baseUrl + 'employees');
    }


  UpdateEmployee(employee: IEmployee) {

  }

  // Delete Student Object
  DeleteEmployee(id: number) {
    return this.http.delete<IEmployee>(this.baseUrl + 'employee/'+id);
  }


  ReadDocuments(id:number)
  {

    return this.http.get<Photo[]>(this.baseUrl + 'employeepic/' + id);

  }
  postFile(caption: string, fileToUpload: File) {
    const endpoint = 'http://127.0.0.1:8000/api/employeecloud/1';
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    return this.http
      .post(endpoint, formData);
  }

}
