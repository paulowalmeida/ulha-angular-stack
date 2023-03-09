import { ComponentFixture, TestBed } from '@angular/core/testing';

import { {{ entity_component }} } from './{{ entity_filename }}.component';

describe('{{ entity_component }}', () => {
  let component: {{ entity_component }};
  let fixture: ComponentFixture<{{ entity_component }}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ {{ entity_component }} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent({{ entity_component }});
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
