import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soru9Component } from './soru9.component';

describe('Soru9Component', () => {
  let component: Soru9Component;
  let fixture: ComponentFixture<Soru9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soru9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Soru9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
