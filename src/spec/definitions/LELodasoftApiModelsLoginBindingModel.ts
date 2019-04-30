import { Option } from 'fp-ts/lib/Option';
import { string, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsLoginBindingModel = {
	email: string;
	password: string;
	rememberMe: Option<boolean>;
	scope: Option<string>;
};
export const LELodasoftApiModelsLoginBindingModelIO = type({
	email: string,
	password: string,
	rememberMe: createOptionFromNullable(boolean, 'rememberMe'),
	scope: createOptionFromNullable(string, 'scope'),
});
