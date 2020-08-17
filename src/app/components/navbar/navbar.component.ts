import { Component, OnInit } from '@angular/core';
import { RatecardService } from 'src/app/_services/ratecard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  status=false;
  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
  constructor(private api:RatecardService,
    private router: Router) { }

  ngOnInit(): void {
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


