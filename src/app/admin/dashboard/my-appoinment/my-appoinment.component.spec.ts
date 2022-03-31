import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppoinmentComponent } from './my-appoinment.component';

describe('MyAppoinmentComponent', () => {
  let component: MyAppoinmentComponent;
  let fixture: ComponentFixture<MyAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAppoinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
