import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bilim5Component } from './bilim5.component';

describe('Bilim5Component', () => {
  let component: Bilim5Component;
  let fixture: ComponentFixture<Bilim5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bilim5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bilim5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
