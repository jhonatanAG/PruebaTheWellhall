import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InthepressComponent } from './inthepress.component';

describe('InthepressComponent', () => {
  let component: InthepressComponent;
  let fixture: ComponentFixture<InthepressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InthepressComponent]
    });
    fixture = TestBed.createComponent(InthepressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
