import { Injectable } from '@angular/core';
import { IEmployee } from '../_model/employee';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Photo } from '../_model/photo';
import { BehaviorSubject } from 'rxjs';
import { IAttendance, IAllPunchinList } from '../_model/attendance';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

public showPuchOutContent$=new BehaviorSubject(false);
  baseUrl = environment.apiUrl;

  private empSource = new BehaviorSubject<boolean>(false);
 public emp$ = this.empSource.asObservable();

  constructor(private http: HttpClient) { }


   AddEmployee(employee: IEmployee) {

    return this.http.post<IEmployee>(this.baseUrl + 'employee', employee );
}
  employeePunchIn(attendance:IAttendance)
    {

        return this.http.post<IAttendance>(this.baseUrl + 'attendance', attendance);

    }
    employeePunchOut(attendance:IAttendance)
    {
      return this.http.put<IAttendance>(this.baseUrl + 'attendance', attendance);

    }

    checkAttendanceStatus(id:number)
    {
      return this.http.get(this.baseUrl + 'attendance/'+id);

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




  getAttendanceslistbydate(obj:any)
  {

    return this.http.post(this.baseUrl + 'attendancelistbydate',obj);
  }



}
