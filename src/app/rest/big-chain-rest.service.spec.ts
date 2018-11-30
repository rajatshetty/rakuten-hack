import { TestBed, inject } from '@angular/core/testing';

import { BigChainRestService } from './big-chain-rest.service';

describe('BigChainRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BigChainRestService]
    });
  });

  it('should be created', inject([BigChainRestService], (service: BigChainRestService) => {
    expect(service).toBeTruthy();
  }));
});
