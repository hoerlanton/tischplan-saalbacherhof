import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BauernstubeComponent } from './bauernstube.component';

describe('BauernstubeComponent', () => {
  let component: BauernstubeComponent;
  let fixture: ComponentFixture<BauernstubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BauernstubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BauernstubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
