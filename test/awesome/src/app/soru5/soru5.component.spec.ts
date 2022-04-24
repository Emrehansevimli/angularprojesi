import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soru5Component } from './soru5.component';

describe('Soru5Component', () => {
  let component: Soru5Component;
  let fixture: ComponentFixture<Soru5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soru5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Soru5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
