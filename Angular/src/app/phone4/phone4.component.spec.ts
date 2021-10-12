import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phone4Component } from './phone4.component';

describe('Phone4Component', () => {
  let component: Phone4Component;
  let fixture: ComponentFixture<Phone4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Phone4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Phone4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
