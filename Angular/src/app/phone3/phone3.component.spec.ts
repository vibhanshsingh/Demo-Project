import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Phone3Component } from './phone3.component';


describe('Phone3Component', () => {
  let component: Phone3Component;
  let fixture: ComponentFixture<Phone3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Phone3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Phone3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
