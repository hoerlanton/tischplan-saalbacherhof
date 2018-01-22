import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdelweissKaminStubeComponent } from './edelweiss-kamin-stube.component';

describe('EdelweissKaminStubeComponent', () => {
  let component: EdelweissKaminStubeComponent;
  let fixture: ComponentFixture<EdelweissKaminStubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdelweissKaminStubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdelweissKaminStubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
