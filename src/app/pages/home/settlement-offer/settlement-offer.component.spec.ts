import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementOfferComponent } from './settlement-offer.component';

describe('SettlementOfferComponent', () => {
  let component: SettlementOfferComponent;
  let fixture: ComponentFixture<SettlementOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlementOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
