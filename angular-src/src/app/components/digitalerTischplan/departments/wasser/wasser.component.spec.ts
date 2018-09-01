import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WasserComponent } from './wasser.component';

describe('WasserComponent', () => {
  let component: WasserComponent;
  let fixture: ComponentFixture<WasserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WasserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
