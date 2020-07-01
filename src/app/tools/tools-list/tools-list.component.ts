import { Component, OnInit } from '@angular/core';
import { ToolService } from 'src/app/_services/tool.service';
import { ToastrService } from 'ngx-toastr';
import { Tool } from 'src/app/_model/tool';
import { DoTask } from 'src/app/_model/task';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss']
})
export class ToolsListComponent implements OnInit {
  p: number = 1;                      // Settup up pagination variable
  myTool: DoTask[];                 // Save students data in Student's array.
  hideWhenNoStudent: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true;

  constructor( public crudApi: ToolService, // Inject student CRUD services in constructor.
    public toastr: ToastrService ) { }

  ngOnInit(): void {

    let s = this.crudApi.GetToolListbyCat();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.myTool = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.myTool.push(a as DoTask);
      })
    })
  }



}
