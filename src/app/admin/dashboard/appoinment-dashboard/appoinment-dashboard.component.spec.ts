import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentDashboardComponent } from './appoinment-dashboard.component';

describe('AppoinmentDashboardComponent', () => {
  let component: AppoinmentDashboardComponent;
  let fixture: ComponentFixture<AppoinmentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
