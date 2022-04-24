import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bilim6Component } from './bilim6.component';

describe('Bilim6Component', () => {
  let component: Bilim6Component;
  let fixture: ComponentFixture<Bilim6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bilim6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bilim6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
