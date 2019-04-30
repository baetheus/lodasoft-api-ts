import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsResetPasswordBindingModel = {
	email: string;
	password: string;
	confirmPassword: Option<string>;
	code: Option<string>;
};
export const LELodasoftApiModelsResetPasswordBindingModelIO = type({
	email: string,
	password: string,
	confirmPassword: createOptionFromNullable(string, 'confirmPassword'),
	code: createOptionFromNullable(string, 'code'),
});
