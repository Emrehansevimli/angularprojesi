import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soru10Component } from './soru10.component';

describe('Soru10Component', () => {
  let component: Soru10Component;
  let fixture: ComponentFixture<Soru10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soru10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Soru10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
