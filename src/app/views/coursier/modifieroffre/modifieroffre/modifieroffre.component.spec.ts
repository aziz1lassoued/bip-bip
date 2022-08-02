import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieroffreComponent } from './modifieroffre.component';

describe('ModifieroffreComponent', () => {
  let component: ModifieroffreComponent;
  let fixture: ComponentFixture<ModifieroffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieroffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieroffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
