import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionTrendComponent } from './resolution-trend.component';

describe('ResolutionTrendComponent', () => {
  let component: ResolutionTrendComponent;
  let fixture: ComponentFixture<ResolutionTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionTrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
