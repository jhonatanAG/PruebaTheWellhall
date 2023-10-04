import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodatiosComponent } from './accommodatios.component';

describe('AccommodatiosComponent', () => {
  let component: AccommodatiosComponent;
  let fixture: ComponentFixture<AccommodatiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccommodatiosComponent]
    });
    fixture = TestBed.createComponent(AccommodatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
