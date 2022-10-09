import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianCompComponent } from './accordian-comp.component';

describe('AccordianCompComponent', () => {
  let component: AccordianCompComponent;
  let fixture: ComponentFixture<AccordianCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
