import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from "./{{ entity_filename }}.reducer";

export const {{ entity_feature_selector }} = createFeatureSelector<State>('{{ entity_feature_selector }}');

export const {{ evt_get_list| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.loading
);

export const {{ evt_get_list_success| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.{{ entity_camel_plural }}
);

export const {{ evt_get_list_failure| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.failure
);

export const {{ evt_get_item| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.loading
);

export const {{ evt_get_item_success| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.{{ entity_camel }}
);

export const {{ evt_get_item_failure| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.failure
);

export const {{ evt_post_item| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.loading
);

export const {{ evt_post_item_success| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.{{ entity_camel }}
);

export const {{ evt_post_item_failure| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.failure
);

export const {{ evt_put_item| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.loading
);

export const {{ evt_put_item_success| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.{{ entity_camel }}
);

export const {{ evt_put_item_failure| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.failure
);

export const {{ evt_delete_item| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.loading
);

export const {{ evt_delete_item_success| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.loading
);

export const {{ evt_delete_item_failure| camelcase }} = createSelector(
    {{ entity_feature_selector }},
    state => state.failure
);
