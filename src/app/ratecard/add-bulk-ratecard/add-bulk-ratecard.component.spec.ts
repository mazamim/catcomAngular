import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBulkRatecardComponent } from './add-bulk-ratecard.component';

describe('AddBulkRatecardComponent', () => {
  let component: AddBulkRatecardComponent;
  let fixture: ComponentFixture<AddBulkRatecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBulkRatecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBulkRatecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
