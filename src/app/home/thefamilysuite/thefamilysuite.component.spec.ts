import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThefamilysuiteComponent } from './thefamilysuite.component';

describe('ThefamilysuiteComponent', () => {
  let component: ThefamilysuiteComponent;
  let fixture: ComponentFixture<ThefamilysuiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThefamilysuiteComponent]
    });
    fixture = TestBed.createComponent(ThefamilysuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
