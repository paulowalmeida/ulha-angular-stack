import { ComponentFixture, TestBed } from '@angular/core/testing';

import { {{ component_classname }} } from './{{ component_filename }}.component';

describe('{{ component_classname }}', () => {
  let component: {{ component_classname }};
  let fixture: ComponentFixture<{{ component_classname }}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ {{ component_classname }} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent({{ component_classname }});
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
