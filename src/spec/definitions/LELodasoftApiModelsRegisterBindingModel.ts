import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsRegisterBindingModel = {
	email: string;
	password: string;
	confirmPassword: Option<string>;
};
export const LELodasoftApiModelsRegisterBindingModelIO = type({
	email: string,
	password: string,
	confirmPassword: createOptionFromOptional(string, 'confirmPassword'),
});
