import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { {{ service_classname }} } from "../services/service/{{ service_filename }}.service";
import * as actions from "./{{ filename }}.actions";
import { State } from "./{{ filename }}.reducer";

@Injectable()
export class {{ effects_name }} {
    {{ get_list }}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{ evt_get_list | pascalcase }}),
            mergeMap(() => this.{{ service_instance }}.{{ get_list }}().pipe(
                map({{ entity_camel_plural }} => actions.{{ evt_get_list_success | pascalcase }}({ {{ entity_camel_plural }} })),
                catchError(({ message }) => of(actions.{{ evt_get_list_failure | pascalcase }}({ failure: { message } })))
            ))
        )
    );

    {{ get_item }}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{ evt_get_item | pascalcase }}),
            mergeMap((payload: any) => this.{{ service_instance }}.{{ get_item }}(payload.id).pipe(
                map({{ entity_camel }} => actions.{{ evt_get_item_success | pascalcase }}({{ entity_camel }})),
                catchError(({ message }) => of(actions.{{ evt_get_item_failure | pascalcase }}({ failure: { message } })))
            ))
        )
    );

    {{ save_item }}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{ evt_post_item | pascalcase }}),
            mergeMap((payload: any) => this.{{ service_instance }}.{{ save_item }}(payload.{{ entity_camel }}).pipe(
                map({{ entity_camel }} => (actions.{{ evt_post_item_success | pascalcase }}({ {{ entity_camel }} }))),
                catchError(({ message }) => of(actions.{{ evt_post_item_failure | pascalcase }}({ failure: { message } })))
            ))
        )
    );

    {{ edit_item }}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{ evt_put_item | pascalcase }}),
            mergeMap((payload: any) => this.{{ service_instance }}.{{ edit_item }}(payload.{{ entity_camel }}).pipe(
                map({{ entity_camel }} => ( actions.{{ evt_put_item_success | pascalcase }}({ {{ entity_camel }} }))),
                catchError(({ message }) => of(actions.{{ evt_put_item_failure | pascalcase }}({ failure: { message } })))
            ))
        )
    );

    {{ remove_item }}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{ evt_delete_item | pascalcase }}),
            mergeMap((payload: any) => this.{{ service_instance }}.{{ remove_item }}(payload.id).pipe(
                map({{ entity_camel }} => ( actions.{{ evt_delete_item_success | pascalcase }}() )),
                catchError(({ message }) => of(actions.{{ evt_delete_item_failure | pascalcase }}({ failure: { message } })))
            ))
        )
    );

    constructor(
        private actions$: Actions,
        private {{ service_instance }}: {{ service_classname }},
        readonly store: Store<State>
    ) { }
}