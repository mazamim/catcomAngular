import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBulkTicketComponent } from './add-bulk-ticket.component';

describe('AddBulkTicketComponent', () => {
  let component: AddBulkTicketComponent;
  let fixture: ComponentFixture<AddBulkTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBulkTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBulkTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
