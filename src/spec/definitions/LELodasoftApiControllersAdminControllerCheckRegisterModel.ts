import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiControllersAdminControllerCheckRegisterModel = {
	username: Option<string>;
	token: Option<string>;
};
export const LELodasoftApiControllersAdminControllerCheckRegisterModelIO = type({
	username: createOptionFromOptional(string, 'username'),
	token: createOptionFromOptional(string, 'token'),
});
