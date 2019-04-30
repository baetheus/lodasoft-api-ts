import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsChangePasswordBindingModel = {
	oldPassword: string;
	newPassword: string;
	confirmPassword: Option<string>;
};
export const LELodasoftApiModelsChangePasswordBindingModelIO = type({
	oldPassword: string,
	newPassword: string,
	confirmPassword: createOptionFromNullable(string, 'confirmPassword'),
});
