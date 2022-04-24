import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bilim1Component } from './bilim1.component';

describe('Bilim1Component', () => {
  let component: Bilim1Component;
  let fixture: ComponentFixture<Bilim1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bilim1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bilim1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
