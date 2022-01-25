import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionRateComponent } from './resolution-rate.component';

describe('ResolutionRateComponent', () => {
  let component: ResolutionRateComponent;
  let fixture: ComponentFixture<ResolutionRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
