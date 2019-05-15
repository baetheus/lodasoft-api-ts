import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsDemoRequestDemoViewModel = {
	name: Option<string>;
	phone: Option<string>;
	email: Option<string>;
	subject: Option<string>;
	message: Option<string>;
};
export const LELodasoftCommonModelsDemoRequestDemoViewModelIO = type({
	name: createOptionFromOptional(string, 'name'),
	phone: createOptionFromOptional(string, 'phone'),
	email: createOptionFromOptional(string, 'email'),
	subject: createOptionFromOptional(string, 'subject'),
	message: createOptionFromOptional(string, 'message'),
});
