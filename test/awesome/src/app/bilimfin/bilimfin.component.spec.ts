import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilimfinComponent } from './bilimfin.component';

describe('BilimfinComponent', () => {
  let component: BilimfinComponent;
  let fixture: ComponentFixture<BilimfinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilimfinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilimfinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
