import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/_services/client.service';
import { ToastrService } from 'ngx-toastr';
import { IClient } from 'src/app/_model/client';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
clients:IClient[];

  constructor( public crudApi: ClientService, // Inject student CRUD services in constructor.
    public toastr: ToastrService,
    private customerservice:CustomerService) { }

  ngOnInit(): void {

    this.getClientlist();
  }

  getClientlist() {
    this.crudApi.GetClientList().subscribe(response => {
      this.clients = response;
    }, error => {
      console.log(error);
    });
  }

  deleteClient(id:number) {
    if (window.confirm('Are you sure want to delete task?')) {

    
      this.crudApi.DeleteClient(id).subscribe(response =>{

          this.toastr.success('successfully deleted!');
          this.customerservice.refresh();


        });
       // Alert message will show up when student successfully deleted.
    }
  }


}
