import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCreditCardComponent } from './delete-credit-card.component';

describe('DeleteCreditCardComponent', () => {
  let component: DeleteCreditCardComponent;
  let fixture: ComponentFixture<DeleteCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCreditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
