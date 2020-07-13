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


  UpdateEmployee(id: number,employee: IEmployee) {
    return this.http.put<IEmployee>(this.baseUrl + 'employee/' + id, employee);
  }

  // Delete Student Object
  DeleteEmployee(id: number) {

    return this.http.delete<IEmployee>(this.baseUrl + 'employee/'+id);
  }

  DeleteDocuments(id:number){
    return this.http.delete<Photo>(this.baseUrl + 'employeedoc/'+id);

  }


  postFile(caption: string, fileToUpload: File,id:number) {

    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    return this.http
      .post(this.baseUrl + 'employeecloud/' + id, formData);
  }


  readFile(id: number)
  {

    return this.http.get<Photo[]>(this.baseUrl + 'employeecloud/' + id);

  }




}
