import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsingTableComponent } from './add-using-table.component';

describe('AddUsingTableComponent', () => {
  let component: AddUsingTableComponent;
  let fixture: ComponentFixture<AddUsingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUsingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
