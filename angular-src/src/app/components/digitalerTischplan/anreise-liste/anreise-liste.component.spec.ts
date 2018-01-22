import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnreiseListeComponent } from './anreise-liste.component';

describe('AnreiseListeComponent', () => {
  let component: AnreiseListeComponent;
  let fixture: ComponentFixture<AnreiseListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnreiseListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnreiseListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
