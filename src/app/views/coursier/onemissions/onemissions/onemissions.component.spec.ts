import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnemissionsComponent } from './onemissions.component';

describe('OnemissionsComponent', () => {
  let component: OnemissionsComponent;
  let fixture: ComponentFixture<OnemissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnemissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnemissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
