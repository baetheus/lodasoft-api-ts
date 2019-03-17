import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiControllersInitializeFormFreeRequest = {
	firstName: Option<string>;
	lastName: Option<string>;
	email: Option<string>;
	last4Ssn: Option<string>;
	maxHeight: Option<number>;
	maxWidth: Option<number>;
};
export const LELodasoftApiControllersInitializeFormFreeRequestIO = type({
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	email: createOptionFromNullable(string),
	last4Ssn: createOptionFromNullable(string),
	maxHeight: createOptionFromNullable(number),
	maxWidth: createOptionFromNullable(number),
});
