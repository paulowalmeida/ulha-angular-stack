import * as actions from "./{{entity_store_filename}}.actions";

describe(`{{entity_store_pascalcase}} Actions`, () => {
	it('Should create a {{ evt_get_list_success_title }} action', () => {
		const action = actions.{{ evt_get_list_success_title }}();
		expect(action.type).toEqual(actions.{{ evt_get_list_success_title }}.type);
	});

	it('Should create a  {{ evt_get_list_success_title }} action containing a payload', () => {
		const payload = [{ }];
		const action = actions. {{ evt_get_list_success_title }}({ {{ entity_store_list | camelcase }}: payload });

		expect({ ...action }).toEqual({
			type: actions. {{ evt_get_list_success_title }}.type,
			{{ entity_store_list | camelcase }}: action.{{ entity_store_list | camelcase }}
		});
	});

	it('Should create a {{ evt_get_list_failure_title }} action containing a error', () => {
		const payload = { message: 'Error loading list.' };
		const action = actions.{{ evt_get_list_failure_title }}({ failure: payload });

		expect({ ...action }).toEqual({
			type: actions.{{ evt_get_list_failure_title }}.type,
			failure: action.failure
		});
	});

	it('Should create a {{ evt_get_item_title }} action', () => {
		const payload = { id: 1 };
		const action = actions.{{ evt_get_item_title }}(payload);
		expect(action.type).toEqual(actions.{{ evt_get_item_title }}.type);
	});

	it('Should create a {{ evt_get_item_success_title }} action containing a payload', () => {
		const payload = {};
		const action = actions.{{ evt_get_item_success_title }}({ {{ entity_store_name| camelcase }}: payload });

		expect({ ...action }).toEqual({
			type: actions.{{ evt_get_item_success_title }}.type,
			{{ entity_store_name| camelcase }}: action.{{ entity_store_name| camelcase }}
		});
	});

	it('Should create a {{ evt_get_item_failure_title }} action containing a error', () => {
		const payload = { message: 'Error loading selected item.' };
		const action = actions.{{ evt_get_item_failure_title }}({ failure: payload });

		expect({ ...action }).toEqual({
			type: actions.{{ evt_get_item_failure_title }}.type,
			failure: action.failure
		});
	});

	it('Should create a {{ evt_post_item| pascalcase }} action', () => {
		const payload = {};
		const action = actions.{{ evt_post_item | pascalcase }}({ {{ entity_store_name | camelcase }}: payload });
		expect(action.type).toEqual(actions.{{ evt_post_item| pascalcase }}.type);
	});

	it('Should create a {{ evt_post_item_success| pascalcase }} action containing a payload', () => {
		const payload = { };
		const action = actions.{{ evt_post_item_success| pascalcase }}({ {{ entity_store_name | camelcase }}: payload });

		expect({ ...action }).toEqual({
			type: actions.{{ evt_post_item_success| pascalcase }}.type,
			{{ entity_store_name | camelcase }}: action.{{ entity_store_name | camelcase }}
		});
	});

	it('Should create a {{ evt_post_item_failure| pascalcase }} action containing a error', () => {
		const payload = { message: 'Error creating selected item.' };
		const action = actions.{{ evt_post_item_failure| pascalcase }}({ failure: payload });

		expect({ ...action }).toEqual({
			type: actions.{{ evt_post_item_failure| pascalcase }}.type,
			failure: action.failure
		});
	});

	it('Should create a {{ evt_put_item| pascalcase }} action', () => {
		const payload = { };
		const action = actions.{{ evt_put_item| pascalcase }}({ {{ entity_store_name | camelcase }}: payload });
		expect(action.type).toEqual(actions.{{ evt_put_item| pascalcase }}.type);
	});

	it('Should create a {{ evt_put_item_success| pascalcase }} action containing a payload', () => {
		const payload = { };
		const action = actions.{{ evt_put_item_success| pascalcase }}({ {{ entity_store_name | camelcase }}: payload });

		expect({ ...action }).toEqual({
			type: actions.{{ evt_put_item_success| pascalcase }}.type,
			{{ entity_store_name | camelcase }}: action.{{ entity_store_name | camelcase }}
		});
	});

	it('Should create a {{ evt_put_item_failure| pascalcase }} action containing a error', () => {
		const payload = { message: 'Error updating selected item.' };
		const action = actions.{{ evt_put_item_failure| pascalcase }}({ failure: payload });

		expect({ ...action }).toEqual({
			type: actions.{{ evt_put_item_failure| pascalcase }}.type,
			failure: action.failure
		});
	});

	it('Should create a {{ evt_delete_item| pascalcase }} action', () => {
		const action = actions.{{ evt_delete_item| pascalcase }}({ id: 1 });
		expect(action.type).toEqual(actions.{{ evt_delete_item| pascalcase }}.type);
	});

	it('Should create a {{ evt_delete_item_success| pascalcase }} action containing a payload', () => {
		const action = actions.{{ evt_delete_item_success| pascalcase }}();
		expect({ ...action }).toEqual({type: actions.{{ evt_delete_item_success| pascalcase }}.type});
	});

	it('Should create a {{ evt_delete_item_failure| pascalcase }} action containing a error', () => {
		const payload = { message: 'Error deleting selected item.' };
		const action = actions.{{ evt_delete_item_failure| pascalcase }}({ failure: payload });

		expect({ ...action }).toEqual({
			type: actions.{{ evt_delete_item_failure| pascalcase }}.type,
			failure: action.failure
		});
	});
});