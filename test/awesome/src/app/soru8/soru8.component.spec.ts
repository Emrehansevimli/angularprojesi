import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soru8Component } from './soru8.component';

describe('Soru8Component', () => {
  let component: Soru8Component;
  let fixture: ComponentFixture<Soru8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soru8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Soru8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
