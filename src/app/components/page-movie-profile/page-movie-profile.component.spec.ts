import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMovieProfileComponent } from './page-movie-profile.component';

describe('PageMovieProfileComponent', () => {
  let component: PageMovieProfileComponent;
  let fixture: ComponentFixture<PageMovieProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMovieProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMovieProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
