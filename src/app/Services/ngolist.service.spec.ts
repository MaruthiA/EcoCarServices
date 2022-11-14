import { TestBed } from '@angular/core/testing';

import { NgolistService } from './ngolist.service';

describe('NgolistService', () => {
  let service: NgolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
