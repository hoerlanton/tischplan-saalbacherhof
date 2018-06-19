import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerasseComponent } from './terasse.component';

describe('TerasseComponent', () => {
  let component: TerasseComponent;
  let fixture: ComponentFixture<TerasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
