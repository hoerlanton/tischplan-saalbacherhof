import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImHausListeComponent } from './im-haus-liste.component';

describe('ImHausListeComponent', () => {
  let component: ImHausListeComponent;
  let fixture: ComponentFixture<ImHausListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImHausListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImHausListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
