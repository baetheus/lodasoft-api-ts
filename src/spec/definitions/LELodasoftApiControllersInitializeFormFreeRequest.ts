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
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	email: createOptionFromNullable(string, 'email'),
	last4Ssn: createOptionFromNullable(string, 'last4Ssn'),
	maxHeight: createOptionFromNullable(number, 'maxHeight'),
	maxWidth: createOptionFromNullable(number, 'maxWidth'),
});
