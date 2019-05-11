import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
