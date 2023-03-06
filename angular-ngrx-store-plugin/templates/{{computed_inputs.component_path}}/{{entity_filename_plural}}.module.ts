import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { {{ entity_component }} } from './{{ entity_filename_plural }}.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { {{ entity_effects }} } from './store/{{ entity_filename }}.effects';
import { {{ entity_reducer }} } from './store/{{ entity_filename }}.reducer';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    {{ entity_component }}
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('{{ entity_feature_selector }}', {{ entity_reducer }}),
    EffectsModule.forFeature([{{ entity_effects }}])
  ],
  exports: [
    {{ entity_component }}
  ]
})
export class {{ entity_module }} { }
