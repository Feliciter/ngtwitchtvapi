import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchSearchComponent } from './twitch-search.component';

describe('TwitchSearchComponent', () => {
  let component: TwitchSearchComponent;
  let fixture: ComponentFixture<TwitchSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
