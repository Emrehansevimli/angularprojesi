import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soru3Component } from './soru3.component';

describe('Soru3Component', () => {
  let component: Soru3Component;
  let fixture: ComponentFixture<Soru3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soru3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Soru3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
