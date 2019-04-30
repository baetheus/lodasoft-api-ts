import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsSetPasswordBindingModel = { newPassword: string; confirmPassword: Option<string> };
export const LELodasoftApiModelsSetPasswordBindingModelIO = type({
	newPassword: string,
	confirmPassword: createOptionFromNullable(string, 'confirmPassword'),
});
