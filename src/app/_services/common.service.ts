import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectService } from './project.service';
import { ICount } from '../_model/project';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public numberofassigned= new BehaviorSubject<number>(0);
  listofData=[];
  constructor( private projectservice:ProjectService) { }


  getcount(){
    this.projectservice.getNumbersCompleted().subscribe(data=>{
     this.listofData = data as ICount[];
      const mydata= this.listofData.filter( (o)=> o.name=='Assigned');
      this.numberofassigned.next(mydata[0].value);
    });
  }
}
