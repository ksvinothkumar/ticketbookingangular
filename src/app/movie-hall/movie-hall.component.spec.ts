import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHallComponent } from './movie-hall.component';

describe('MovieHallComponent', () => {
  let component: MovieHallComponent;
  let fixture: ComponentFixture<MovieHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
