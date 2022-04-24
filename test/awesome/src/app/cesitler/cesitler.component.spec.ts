import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesitlerComponent } from './cesitler.component';

describe('CesitlerComponent', () => {
  let component: CesitlerComponent;
  let fixture: ComponentFixture<CesitlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CesitlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CesitlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
