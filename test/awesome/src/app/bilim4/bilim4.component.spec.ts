import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bilim4Component } from './bilim4.component';

describe('Bilim4Component', () => {
  let component: Bilim4Component;
  let fixture: ComponentFixture<Bilim4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bilim4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bilim4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
