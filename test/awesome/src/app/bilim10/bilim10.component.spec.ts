import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bilim10Component } from './bilim10.component';

describe('Bilim10Component', () => {
  let component: Bilim10Component;
  let fixture: ComponentFixture<Bilim10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bilim10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bilim10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
