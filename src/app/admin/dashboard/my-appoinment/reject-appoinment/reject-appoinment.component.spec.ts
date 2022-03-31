import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectAppoinmentComponent } from './reject-appoinment.component';

describe('RejectAppoinmentComponent', () => {
  let component: RejectAppoinmentComponent;
  let fixture: ComponentFixture<RejectAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectAppoinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
