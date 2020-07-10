import { TestBed } from '@angular/core/testing';

import { GestionModulesService } from './gestion-modules.service';

describe('GestionModulesService', () => {
  let service: GestionModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
