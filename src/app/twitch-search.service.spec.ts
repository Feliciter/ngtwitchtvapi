import { TestBed, inject } from '@angular/core/testing';

import { TwitchSearchService } from './twitch-search.service';

describe('TwitchSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitchSearchService]
    });
  });

  it('should be created', inject([TwitchSearchService], (service: TwitchSearchService) => {
    expect(service).toBeTruthy();
  }));
});
