import { TestBed, inject } from '@angular/core/testing';

import { BigchaindataService } from './bigchaindata.service';

describe('BigchaindataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BigchaindataService]
    });
  });

  it('should be created', inject([BigchaindataService], (service: BigchaindataService) => {
    expect(service).toBeTruthy();
  }));
});
