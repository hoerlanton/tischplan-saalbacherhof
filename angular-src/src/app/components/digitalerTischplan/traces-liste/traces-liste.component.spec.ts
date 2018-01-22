import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracesListeComponent } from './traces-liste.component';

describe('TracesListeComponent', () => {
  let component: TracesListeComponent;
  let fixture: ComponentFixture<TracesListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracesListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
