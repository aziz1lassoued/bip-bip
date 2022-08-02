import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreadmessagesComponent } from './unreadmessages.component';

describe('UnreadmessagesComponent', () => {
  let component: UnreadmessagesComponent;
  let fixture: ComponentFixture<UnreadmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnreadmessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreadmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
