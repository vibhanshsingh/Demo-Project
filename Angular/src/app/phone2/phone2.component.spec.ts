import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phone2Component } from './phone2.component';

describe('Phone2Component', () => {
  let component: Phone2Component;
  let fixture: ComponentFixture<Phone2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Phone2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Phone2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
