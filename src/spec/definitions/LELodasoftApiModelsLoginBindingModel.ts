import { Option } from 'fp-ts/lib/Option';
import { string, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsLoginBindingModel = {
	email: string;
	password: string;
	rememberMe: Option<boolean>;
	scope: Option<string>;
};
export const LELodasoftApiModelsLoginBindingModelIO = type({
	email: string,
	password: string,
	rememberMe: createOptionFromOptional(boolean, 'rememberMe'),
	scope: createOptionFromOptional(string, 'scope'),
});
