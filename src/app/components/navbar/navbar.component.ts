import { Component, OnInit } from '@angular/core';
import { RatecardService } from 'src/app/_services/ratecard.service';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/_services/project.service';
import { ICount } from 'src/app/_model/project';
import { Observable, BehaviorSubject } from 'rxjs';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  status=false;
;


  constructor(private api:RatecardService,
    private router: Router,
    public  common:CommonService) { }

  ngOnInit(): void {

this.common.getcount();
  }
  logIn() {}

  loggedIN() { return true}

  loggedOUT() {return false}

  toggle()
  {
    this.status=!this.status

  }
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  ratecardclicked()
  {
    this.api.setValaue(true);
    this.router.navigate(['/ratecard']);
  }


}


