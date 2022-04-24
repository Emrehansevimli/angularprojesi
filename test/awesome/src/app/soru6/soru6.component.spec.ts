import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soru6Component } from './soru6.component';

describe('Soru6Component', () => {
  let component: Soru6Component;
  let fixture: ComponentFixture<Soru6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soru6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Soru6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
