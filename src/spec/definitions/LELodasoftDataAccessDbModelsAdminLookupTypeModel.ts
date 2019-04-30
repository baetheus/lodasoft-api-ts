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
	id: createOptionFromNullable(number, 'id'),
	lookupTypeID: createOptionFromNullable(number, 'lookupTypeID'),
	lookupGroup: createOptionFromNullable(string, 'lookupGroup'),
	lookupValue: createOptionFromNullable(string, 'lookupValue'),
	lookupDescription: createOptionFromNullable(string, 'lookupDescription'),
	lookupOrder: createOptionFromNullable(number, 'lookupOrder'),
});
