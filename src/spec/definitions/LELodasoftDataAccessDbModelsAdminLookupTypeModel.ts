import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftDataAccessDbModelsAdminLookupTypeModel = {
	id: Option<number>;
	lookupTypeID: Option<number>;
	lookupGroup: Option<string>;
	lookupValue: Option<string>;
	lookupDescription: Option<string>;
	lookupOrder: Option<number>;
};
export const LELodasoftDataAccessDbModelsAdminLookupTypeModelIO = type({
	id: createOptionFromOptional(number, 'id'),
	lookupTypeID: createOptionFromOptional(number, 'lookupTypeID'),
	lookupGroup: createOptionFromOptional(string, 'lookupGroup'),
	lookupValue: createOptionFromOptional(string, 'lookupValue'),
	lookupDescription: createOptionFromOptional(string, 'lookupDescription'),
	lookupOrder: createOptionFromOptional(number, 'lookupOrder'),
});
