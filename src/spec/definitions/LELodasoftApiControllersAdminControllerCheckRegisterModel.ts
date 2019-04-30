import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiControllersAdminControllerCheckRegisterModel = {
	username: Option<string>;
	token: Option<string>;
};
export const LELodasoftApiControllersAdminControllerCheckRegisterModelIO = type({
	username: createOptionFromNullable(string, 'username'),
	token: createOptionFromNullable(string, 'token'),
});
