import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bilim3Component } from './bilim3.component';

describe('Bilim3Component', () => {
  let component: Bilim3Component;
  let fixture: ComponentFixture<Bilim3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bilim3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bilim3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
