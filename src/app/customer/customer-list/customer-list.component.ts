import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/_services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { ICustomer } from 'src/app/_model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers:ICustomer[];
  constructor(public crudApi: CustomerService, // Inject student CRUD services in constructor.
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList()
  {
    this.crudApi.GetCustomerList().subscribe(response => {
      this.customers = response;
    }, error => {
      console.log(error);
    });

  }

  deleteCustomer(id:number) {
    if (window.confirm('Are you sure want to delete task?')) {


      this.crudApi.DeleteCustomer(id).subscribe(response =>{

          this.toastr.success('successfully deleted!');

          this.crudApi.refresh();
        });
       // Alert message will show up when student successfully deleted.
    }
  }

}
