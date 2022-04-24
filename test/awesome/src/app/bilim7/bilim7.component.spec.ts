import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bilim7Component } from './bilim7.component';

describe('Bilim7Component', () => {
  let component: Bilim7Component;
  let fixture: ComponentFixture<Bilim7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bilim7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bilim7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
