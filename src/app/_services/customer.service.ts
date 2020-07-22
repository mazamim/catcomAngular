import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../_model/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  GetClientList() {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers');
  }
  
  AddClient(data:ICustomer){

    return this.http.post<ICustomer>(this.baseUrl + 'customers', data );

  }

  DeleteClient(id: number) {

    return this.http.delete<ICustomer>(this.baseUrl + 'customer/'+id);
  }
}
