import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleComponent } from './alle.component';

describe('AlleComponent', () => {
  let component: AlleComponent;
  let fixture: ComponentFixture<AlleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
