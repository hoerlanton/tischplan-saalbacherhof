import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaeldlerStubeKristallStubeComponent } from './waeldler-stube-kristall-stube.component';

describe('WaeldlerStubeKristallStubeComponent', () => {
  let component: WaeldlerStubeKristallStubeComponent;
  let fixture: ComponentFixture<WaeldlerStubeKristallStubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaeldlerStubeKristallStubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaeldlerStubeKristallStubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
