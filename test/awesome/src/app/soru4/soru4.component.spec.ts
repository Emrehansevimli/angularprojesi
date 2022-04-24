import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soru4Component } from './soru4.component';

describe('Soru4Component', () => {
  let component: Soru4Component;
  let fixture: ComponentFixture<Soru4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soru4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Soru4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
