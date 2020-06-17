import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresstasklistComponent } from './progresstasklist.component';

describe('ProgresstasklistComponent', () => {
  let component: ProgresstasklistComponent;
  let fixture: ComponentFixture<ProgresstasklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresstasklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresstasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
