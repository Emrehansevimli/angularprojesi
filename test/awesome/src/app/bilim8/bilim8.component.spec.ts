import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bilim8Component } from './bilim8.component';

describe('Bilim8Component', () => {
  let component: Bilim8Component;
  let fixture: ComponentFixture<Bilim8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bilim8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bilim8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
