import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsUserUserLookupView = {
	id: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
	roleId: Option<number>;
};
export const LELodasoftApiModelsUserUserLookupViewIO = type({
	id: createOptionFromNullable(string),
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	roleId: createOptionFromNullable(number),
});
