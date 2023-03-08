import { {{ entity_failure_model }} } from "./{{ entity_filename }}-failure.model";

export interface AbstractFetchStateModel {
    failure: {{ entity_failure_model }} | null;
    loading: boolean | null;
}
