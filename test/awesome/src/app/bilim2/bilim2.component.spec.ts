import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bilim2Component } from './bilim2.component';

describe('Bilim2Component', () => {
  let component: Bilim2Component;
  let fixture: ComponentFixture<Bilim2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bilim2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bilim2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
