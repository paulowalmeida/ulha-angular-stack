import { TestBed } from '@angular/core/testing';

import { {{ service_classname }} } from './{{ service_filename }}.service';

describe('{{ service_classname }}', () => {
  let service: {{ service_classname }};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject({{ service_classname }});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
