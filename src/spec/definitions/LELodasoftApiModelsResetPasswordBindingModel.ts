import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsResetPasswordBindingModel = {
	email: string;
	password: string;
	confirmPassword: Option<string>;
	code: Option<string>;
};
export const LELodasoftApiModelsResetPasswordBindingModelIO = type({
	email: string,
	password: string,
	confirmPassword: createOptionFromOptional(string, 'confirmPassword'),
	code: createOptionFromOptional(string, 'code'),
});
