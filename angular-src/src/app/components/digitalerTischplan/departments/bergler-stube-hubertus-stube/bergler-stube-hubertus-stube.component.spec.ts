import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerglerStubeHubertusStubeComponent } from './bergler-stube-hubertus-stube.component';

describe('BerglerStubeHubertusStubeComponent', () => {
  let component: BerglerStubeHubertusStubeComponent;
  let fixture: ComponentFixture<BerglerStubeHubertusStubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerglerStubeHubertusStubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerglerStubeHubertusStubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
