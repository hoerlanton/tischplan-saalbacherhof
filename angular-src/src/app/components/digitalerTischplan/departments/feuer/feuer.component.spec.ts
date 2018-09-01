import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuerComponent } from './feuer.component';

describe('FeuerComponent', () => {
  let component: FeuerComponent;
  let fixture: ComponentFixture<FeuerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeuerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
