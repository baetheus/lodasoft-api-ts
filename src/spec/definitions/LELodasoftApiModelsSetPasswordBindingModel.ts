import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsSetPasswordBindingModel = { newPassword: string; confirmPassword: Option<string> };
export const LELodasoftApiModelsSetPasswordBindingModelIO = type({
	newPassword: string,
	confirmPassword: createOptionFromOptional(string, 'confirmPassword'),
});
