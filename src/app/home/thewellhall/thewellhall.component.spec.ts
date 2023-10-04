import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThewellhallComponent } from './thewellhall.component';

describe('ThewellhallComponent', () => {
  let component: ThewellhallComponent;
  let fixture: ComponentFixture<ThewellhallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThewellhallComponent]
    });
    fixture = TestBed.createComponent(ThewellhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
