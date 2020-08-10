import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobTypesComponent } from './add-job-types.component';

describe('AddJobTypesComponent', () => {
  let component: AddJobTypesComponent;
  let fixture: ComponentFixture<AddJobTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
