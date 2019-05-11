import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsUserUserLookupView = {
	id: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
	roleId: Option<number>;
};
export const LELodasoftApiModelsUserUserLookupViewIO = type({
	id: createOptionFromOptional(string, 'id'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	roleId: createOptionFromOptional(number, 'roleId'),
});
