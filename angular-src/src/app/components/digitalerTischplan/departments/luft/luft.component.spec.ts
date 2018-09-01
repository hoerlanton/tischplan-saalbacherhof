import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuftComponent } from './luft.component';

describe('LuftComponent', () => {
  let component: LuftComponent;
  let fixture: ComponentFixture<LuftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
