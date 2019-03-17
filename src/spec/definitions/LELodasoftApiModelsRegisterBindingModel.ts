import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsRegisterBindingModel = {
	email: string;
	password: string;
	confirmPassword: Option<string>;
};
export const LELodasoftApiModelsRegisterBindingModelIO = type({
	email: string,
	password: string,
	confirmPassword: createOptionFromNullable(string),
});
