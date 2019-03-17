import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsDemoRequestDemoViewModel = {
	name: Option<string>;
	phone: Option<string>;
	email: Option<string>;
	subject: Option<string>;
	message: Option<string>;
};
export const LELodasoftCommonModelsDemoRequestDemoViewModelIO = type({
	name: createOptionFromNullable(string),
	phone: createOptionFromNullable(string),
	email: createOptionFromNullable(string),
	subject: createOptionFromNullable(string),
	message: createOptionFromNullable(string),
});
