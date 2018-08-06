import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrasseEdelweissComponent } from './terrasse-edelweiss.component';

describe('TerasseComponent', () => {
  let component: TerrasseEdelweissComponent;
  let fixture: ComponentFixture<TerrasseEdelweissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrasseEdelweissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrasseEdelweissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
