import { TestBed } from '@angular/core/testing';

import { PhotoboardService } from './photoboard.service';

describe('PhotoboardService', () => {
  let service: PhotoboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
