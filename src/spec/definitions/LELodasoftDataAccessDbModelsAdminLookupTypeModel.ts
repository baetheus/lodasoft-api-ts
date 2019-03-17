import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsAdminLookupTypeModel = {
	id: Option<number>;
	lookupTypeID: Option<number>;
	lookupGroup: Option<string>;
	lookupValue: Option<string>;
	lookupDescription: Option<string>;
	lookupOrder: Option<number>;
};
export const LELodasoftDataAccessDbModelsAdminLookupTypeModelIO = type({
	id: createOptionFromNullable(number),
	lookupTypeID: createOptionFromNullable(number),
	lookupGroup: createOptionFromNullable(string),
	lookupValue: createOptionFromNullable(string),
	lookupDescription: createOptionFromNullable(string),
	lookupOrder: createOptionFromNullable(number),
});
