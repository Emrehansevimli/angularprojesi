import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soru7Component } from './soru7.component';

describe('Soru7Component', () => {
  let component: Soru7Component;
  let fixture: ComponentFixture<Soru7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soru7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Soru7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
