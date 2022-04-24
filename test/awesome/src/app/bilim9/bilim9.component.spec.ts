import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bilim9Component } from './bilim9.component';

describe('Bilim9Component', () => {
  let component: Bilim9Component;
  let fixture: ComponentFixture<Bilim9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bilim9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bilim9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
