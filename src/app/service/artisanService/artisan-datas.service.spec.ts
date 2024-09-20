import { TestBed } from '@angular/core/testing';

import { ArtisanDatasService } from './artisan-datas.service';

describe('ArtisanDatasService', () => {
  let service: ArtisanDatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtisanDatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
