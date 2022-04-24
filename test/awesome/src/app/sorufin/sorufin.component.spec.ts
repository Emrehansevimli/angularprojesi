import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorufinComponent } from './sorufin.component';

describe('SorufinComponent', () => {
  let component: SorufinComponent;
  let fixture: ComponentFixture<SorufinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorufinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorufinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
