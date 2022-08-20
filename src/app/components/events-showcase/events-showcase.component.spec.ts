import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsShowcaseComponent } from './events-showcase.component';

describe('EventsShowcaseComponent', () => {
  let component: EventsShowcaseComponent;
  let fixture: ComponentFixture<EventsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
