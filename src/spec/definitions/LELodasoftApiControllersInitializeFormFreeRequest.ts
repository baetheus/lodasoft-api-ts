import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiControllersInitializeFormFreeRequest = {
	firstName: Option<string>;
	lastName: Option<string>;
	email: Option<string>;
	last4Ssn: Option<string>;
	maxHeight: Option<number>;
	maxWidth: Option<number>;
};
export const LELodasoftApiControllersInitializeFormFreeRequestIO = type({
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	email: createOptionFromOptional(string, 'email'),
	last4Ssn: createOptionFromOptional(string, 'last4Ssn'),
	maxHeight: createOptionFromOptional(number, 'maxHeight'),
	maxWidth: createOptionFromOptional(number, 'maxWidth'),
});
