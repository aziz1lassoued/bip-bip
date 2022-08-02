import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresdetailsComponent } from './offresdetails.component';

describe('OffresdetailsComponent', () => {
  let component: OffresdetailsComponent;
  let fixture: ComponentFixture<OffresdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
