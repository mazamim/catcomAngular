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

  GetCustomerList() {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers');
  }
  
  AddCustomer(data:ICustomer){

    return this.http.post<ICustomer>(this.baseUrl + 'customers', data );

  }

  DeleteCustomer(id: number) {

    return this.http.delete<ICustomer>(this.baseUrl + 'customer/'+id);
  }
}
