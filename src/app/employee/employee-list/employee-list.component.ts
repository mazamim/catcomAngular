import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_model/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  p: number = 1;                      // Settup up pagination variable
  Employee: Employee[];                 // Save students data in Student's array.
  hideWhenNoStudent: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)
  oneAtATime: boolean = true;


  constructor(
    public crudApi: EmployeeService, // Inject student CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
    ){ }


  ngOnInit(): void {

    this.dataState(); // Initialize student's list, when component is ready
    let s = this.crudApi.GetEmployeeList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Employee = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Employee.push(a as Employee);
      })
    })
  }

    // Using valueChanges() method to fetch simple list of students data. It updates the state of hideWhenNoStudent, noData & preLoader variables when any changes occurs in student data list in real-time.
    dataState() {
      this.crudApi.GetEmployeeList().valueChanges().subscribe(data => {
        this.preLoader = false;
        if(data.length <= 0){
          this.hideWhenNoStudent = false;
          this.noData = true;
        } else {
          this.hideWhenNoStudent = true;
          this.noData = false;
        }
      })
    }

      // Method to delete student object
  deleteEmployee(employee) {
    if (window.confirm('Are sure you want to delete this emploee ?')) { // Asking from user before Deleting student data.
      this.crudApi.DeleteEmployee(employee.$key) // Using Delete student API to delete student.
      this.toastr.success(employee.firstName + ' successfully deleted!'); // Alert message will show up when student successfully deleted.
    }
  }

}
