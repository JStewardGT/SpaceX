import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingLaunchesComponent } from './upcoming-launches.component';

describe('UpcomingLaunchesComponent', () => {
  let component: UpcomingLaunchesComponent;
  let fixture: ComponentFixture<UpcomingLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingLaunchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
