import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeestubeTeeloungeComponent } from './teestube-teelounge.component';

describe('TeestubeTeeloungeComponent', () => {
  let component: TeestubeTeeloungeComponent;
  let fixture: ComponentFixture<TeestubeTeeloungeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeestubeTeeloungeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeestubeTeeloungeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
