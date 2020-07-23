import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../_model/customer';
import { environment } from 'src/environments/environment';
import {Location} from '@angular/common'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient,private location:Location,private router: Router) { }

  GetCustomerList() {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers');
  }

  AddCustomer(data:ICustomer){

    return this.http.post<ICustomer>(this.baseUrl + 'customers', data );

  }

  DeleteCustomer(id: number) {

    return this.http.delete<ICustomer>(this.baseUrl + 'customer/'+id);
  }

  refresh(): void{

    this.router.navigateByUrl("/refresh",{skipLocationChange:true}).then(()=>{

      this.router.navigate([decodeURI(this.location.path())]);

    });
  }
}
